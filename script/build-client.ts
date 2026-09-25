import { mkdir, mkdtemp, readFile, rm, writeFile } from "fs/promises";
import path from "path";
import { execFileSync } from "child_process";
import { pathToFileURL } from "url";
import { build as viteBuild } from "vite";
import { DATA_FILES, ROUTES, SITE, applyHead, llmsTxt, robotsTxt, sitemapXml } from "./seo";

const clientOutDir = path.resolve("dist/public");

export async function buildClient() {
  console.log("building client...");
  await viteBuild();

  // Inside the project so the SSR bundle can resolve the externalized react packages.
  const cacheDir = path.resolve("node_modules/.cache");
  await mkdir(cacheDir, { recursive: true });
  const ssrOutDir = await mkdtemp(path.join(cacheDir, "michaelewens-ssr-"));

  try {
    console.log("prerendering routes...");
    await viteBuild({
      ssr: {
        noExternal: true,
        // One shared copy of each; bundling them let lazy page chunks pick up second instances.
        external: ["react", "react-dom", "wouter"],
      },
      build: {
        ssr: path.resolve("client/src/entry-server.tsx"),
        outDir: ssrOutDir,
        emptyOutDir: true,
        copyPublicDir: false,
        rollupOptions: {
          output: {
            entryFileNames: "entry-server.mjs",
          },
        },
      },
    });

    const serverEntry = path.join(ssrOutDir, "entry-server.mjs");
    const renderedPath = path.join(ssrOutDir, "rendered.json");
    const env = { ...process.env };
    delete env.NODE_OPTIONS;
    execFileSync(
      process.execPath,
      [path.resolve("script/prerender-runner.mjs"), serverEntry, renderedPath, ...ROUTES.map((r) => r.path)],
      { stdio: "inherit", env },
    );
    const rendered: Record<string, string> = JSON.parse(await readFile(renderedPath, "utf8"));
    const indexPath = path.join(clientOutDir, "index.html");
    const template = await readFile(indexPath, "utf8");
    const rootPlaceholder = '<div id="root"></div>';

    if (!template.includes(rootPlaceholder)) {
      throw new Error(`Could not find ${rootPlaceholder} in ${indexPath}`);
    }

    // One static HTML file per route (GitHub Pages serves /research from research.html),
    // so every page returns 200 with its full content before any JavaScript runs.
    for (const route of ROUTES) {
      const prerendered = rendered[route.path];
      if (typeof prerendered !== "string" || !prerendered) {
        throw new Error(`No prerender output for ${route.path}`);
      }
      // The template <head> carries the route title; drop the page's own <title> from the body.
      const appHtml = prerendered.replace(/<title>[^<]*<\/title>/g, "");
      const html = applyHead(template, route).replace(
        rootPlaceholder,
        `<div id="root" data-ssr-path="${route.path}">${appHtml}</div>`,
      );
      await writeFile(path.join(clientOutDir, route.file), html);
      // Same page at /research/ (GitHub Pages serves research/index.html there, research.html at
      // /research, no redirect), so saved links with a trailing slash still get a 200.
      if (route.path !== "/") {
        await mkdir(path.join(clientOutDir, route.path), { recursive: true });
        await writeFile(path.join(clientOutDir, route.path, "index.html"), html);
      }
    }

    // Old /press URL: static redirect to /media.
    const pressRedirect = 
      `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Media | Michael Ewens</title><link rel="canonical" href="${SITE}/media" /><meta http-equiv="refresh" content="0; url=/media" /></head><body><a href="/media">Media</a></body></html>\n`;
    await writeFile(path.join(clientOutDir, "press.html"), pressRedirect);
    await mkdir(path.join(clientOutDir, "press"), { recursive: true });
    await writeFile(path.join(clientOutDir, "press", "index.html"), pressRedirect);

    console.log("writing sitemap, robots, llms.txt, data files...");
    await writeFile(path.join(clientOutDir, "sitemap.xml"), sitemapXml());
    await writeFile(path.join(clientOutDir, "robots.txt"), robotsTxt());
    await writeFile(path.join(clientOutDir, "llms.txt"), llmsTxt());
    await mkdir(path.join(clientOutDir, "data"), { recursive: true });
    for (const [file, data] of Object.entries(DATA_FILES)) {
      await writeFile(path.join(clientOutDir, "data", file), JSON.stringify(data, null, 2) + "\n");
    }
  } finally {
    await rm(ssrOutDir, { recursive: true, force: true });
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  buildClient().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

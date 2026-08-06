import { mkdtemp, readFile, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import path from "path";
import { pathToFileURL } from "url";
import { build as viteBuild } from "vite";

const clientOutDir = path.resolve("dist/public");

export async function buildClient() {
  console.log("building client...");
  await viteBuild();

  const ssrOutDir = await mkdtemp(path.join(tmpdir(), "michaelewens-ssr-"));

  try {
    console.log("prerendering homepage...");
    await viteBuild({
      ssr: {
        noExternal: true,
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
    const { render } = await import(pathToFileURL(serverEntry).href);
    const appHtml = render("/");
    const indexPath = path.join(clientOutDir, "index.html");
    const indexHtml = await readFile(indexPath, "utf8");
    const rootPlaceholder = '<div id="root"></div>';

    if (!indexHtml.includes(rootPlaceholder)) {
      throw new Error(`Could not find ${rootPlaceholder} in ${indexPath}`);
    }

    await writeFile(
      indexPath,
      indexHtml.replace(rootPlaceholder, `<div id="root">${appHtml}</div>`),
    );
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

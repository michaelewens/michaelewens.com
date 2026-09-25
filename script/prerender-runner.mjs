// Renders routes with the SSR bundle under plain Node. Run as a child process because
// tsx's loader gives lazily imported chunks their own module instances (and a router
// without ssrPath), which breaks prerendering of lazy routes.
import { writeFile } from "fs/promises";
import { pathToFileURL } from "url";

const [entry, outFile, ...paths] = process.argv.slice(2);
const { render } = await import(pathToFileURL(entry).href);
const result = {};
for (const p of paths) result[p] = await render(p);
await writeFile(outFile, JSON.stringify(result));

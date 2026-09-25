import { prerenderToNodeStream } from "react-dom/static";
import App from "./App";

// Waits for lazy-loaded routes to resolve, so every page prerenders its full content.
// Any render error fails the build rather than shipping an empty page.
export async function render(path = "/") {
  const errors: unknown[] = [];
  const { prelude } = await prerenderToNodeStream(<App ssrPath={path} />, {
    onError: (error) => {
      errors.push(error);
    },
  });
  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  if (errors.length) {
    throw new Error(`Prerender failed for ${path}: ${errors.map((e) => (e instanceof Error ? e.stack : String(e))).join("; ")}`);
  }
  return Buffer.concat(chunks).toString("utf8");
}

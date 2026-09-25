import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;
const ssrPath = root.dataset.ssrPath;

// GitHub Pages also serves /research.html (and /index.html); show those under the clean URL.
if (ssrPath) {
  const fileAlias = ssrPath === "/" ? "/index.html" : `${ssrPath}.html`;
  if (window.location.pathname === fileAlias) {
    window.history.replaceState(window.history.state, "", ssrPath + window.location.search + window.location.hash);
  }
}

// Each route ships prerendered HTML tagged with its path; hydrate it when it matches.
const isPrerendered = root.hasChildNodes() && ssrPath === window.location.pathname;

if (isPrerendered) {
  hydrateRoot(root, <App />);
} else {
  root.replaceChildren();
  createRoot(root).render(<App />);
}

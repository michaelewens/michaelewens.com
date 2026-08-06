import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;
const isPrerenderedHome = root.hasChildNodes() && window.location.pathname === "/";

if (isPrerenderedHome) {
  hydrateRoot(root, <App />);
} else {
  root.replaceChildren();
  createRoot(root).render(<App />);
}

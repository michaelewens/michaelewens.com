import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { imagetools } from "vite-imagetools";

// `import pic from "...webp?rw=480,720,1080&responsive"` produces AVIF + WebP at those widths
// (never wider than the source) for <ResponsiveImage>.
function responsiveImages() {
  return imagetools({
    defaultDirectives: async (url, metadata) => {
      if (!url.searchParams.has("responsive")) return new URLSearchParams();
      const { width = 0 } = await metadata();
      const requested = (url.searchParams.get("rw") ?? "480,720,1080").split(",").map(Number);
      const widths = requested.filter((w) => w < width * 0.9);
      if (widths.length < requested.length) widths.push(width);
      return new URLSearchParams({
        w: widths.join(";"),
        format: "avif;webp",
        quality: "65",
        as: "picture",
      });
    },
  });
}

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    responsiveImages(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

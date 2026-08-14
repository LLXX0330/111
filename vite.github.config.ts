import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "github-pages-src",
  base: "/111/",
  publicDir: "../public",
  plugins: [react()],
  build: {
    outDir: "../github-pages",
    emptyOutDir: true,
  },
});

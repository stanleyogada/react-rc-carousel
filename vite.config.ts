import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import * as packageJson from "./package.json";

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "react-rc-carousel",
      formats: ["es", "cjs"],
      fileName: (format) =>
        `react-rc-carousel.${format === "cjs" ? "cjs" : "es.js"}`,
    },
    optimizeDeps: {
      exclude: Object.keys(packageJson.peerDependencies),
    },
    esbuild: {
      minify: true,
    },
  },
}));

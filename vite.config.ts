import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { lightGreen } from "kolorist";
import banner from "vite-plugin-banner";
import dts from "vite-plugin-dts";

import pkg from "./package.json";
const name = "storyblok-vue";

// eslint-disable-next-line no-console
console.log(`${lightGreen("Storyblok Vue")} v${pkg.version}`);

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    banner({
      content: `/**\n * name: ${pkg.name}\n * version: v${
        pkg.version
      }\n * (c) ${new Date().getFullYear()}\n * description: ${pkg.description}\n * author: ${pkg.author}\n */`,
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "storyblokVue",
      fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
    },
    rollupOptions: {
      output: {
        globals: {
          vue: "Vue",
        },
      },
      external: ["vue"],
    },
  },
});

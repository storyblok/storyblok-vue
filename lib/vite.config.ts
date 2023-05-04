/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const name = "storyblok-vue";

export default defineConfig(() => {
  return {
    test: {
      globals: true,
      environment: "jsdom",
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.ts"),
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
    plugins: [vue()],
  };
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from 'vite-plugin-dts';
import path from "path";

const name = "storyblok-vue";

export default defineConfig(() => {
  return {
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
        external: ["axios", "vue"], // FIX: temporary till we remove axios dependency in storyblok-js-client
      },
    },
    plugins: [vue(), dts()],
  };
});

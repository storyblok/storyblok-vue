import { defineConfig } from "vite";
import path from "path";

const name = "storyblok-vue";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.js"),
        name: "storyblokVue",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
      rollupOptions: {
        external: ["axios"], // FIX: temporary till we remove axios dependency in storyblok-js-client
      },
    },
  };
});

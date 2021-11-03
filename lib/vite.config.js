import { defineConfig } from "vite";
import path from "path";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.js"),
        name: "storyblok",
        fileName: "storyblok-vue",
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: { vue: "Vue" },
        },
      },
    },
  };
});

import { defineConfig } from "cypress";
import { join } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: {
        plugins: [vue()],
        server: {
          fs: {
            allow: [
              join(__dirname, "..", "playground"),
              "cypress/testing-components",
            ],
          },
        },
      },
    },
  },
});

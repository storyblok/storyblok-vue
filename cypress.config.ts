import { defineConfig } from 'cypress';
import vue from '@vitejs/plugin-vue';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: {
        plugins: [vue()],
        resolve: {
          alias: {
            '@storyblok/vue': resolve(__dirname, './src/index.ts'),
          },
        },
        /* server: {
          fs: {
            allow: [
              join(__dirname, '..', 'playground/vue'),
              'cypress/testing-components',
            ],
          },
        }, */
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

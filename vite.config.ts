/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue';

import { defineConfig } from 'vite';

import pkg from './package.json';
import { lightGreen } from 'kolorist';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';

// eslint-disable-next-line no-console
console.log(`${lightGreen('Storyblok Vue')} v${pkg.version}`);

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    vue(),
    banner({
      content: `/**\n * name: ${pkg.name}\n * (c) ${new Date().getFullYear()}\n * description: ${pkg.description}\n * author: ${pkg.author}\n */`,
    }),
  ],

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'storyblokVue',
      fileName: format => (format === 'es' ? `storyblok-vue.mjs` : `storyblok-vue.js`),
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue'],
    },
  },
  optimizeDeps: {
    exclude: ['vue'],
  },
});

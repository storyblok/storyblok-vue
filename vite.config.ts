import vue from '@vitejs/plugin-vue';
import { defineConfig, type Plugin } from 'vitest/config';
import path from 'node:path';
import { lightGreen } from 'kolorist';
import banner from 'vite-plugin-banner';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

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
    }) as unknown as Plugin,
  ] as Plugin[],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      name: 'storyblokVue',
      fileName: (format) => {
        const name = 'storyblok-vue';
        return format === 'es' ? `${name}.mjs` : `${name}.js`;
      },
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

  test: {
    globals: true,
    include: ['./src/__tests__/**/*'],
    exclude: ['./src/__tests__/cypress', './src/__tests__/testing-components'],
  },
});

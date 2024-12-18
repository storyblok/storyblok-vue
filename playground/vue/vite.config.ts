import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'pathe';

import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    basicSsl(),
  ],
  resolve: {
    alias: {
      '@storyblok/vue': resolve(__dirname, '../../src/index.ts'),
    },
  },
});

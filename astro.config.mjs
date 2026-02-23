import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aatg.vn',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});

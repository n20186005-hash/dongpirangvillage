import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dongpirangvillage.com',
  output: 'static',
  // Force a single canonical URL form: non-www + HTTPS + trailing slash.
  // Combined with _redirects, this collapses /ko, /ko/, www…/ko into one URL.
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ko',
    locales: ['zh', 'en', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

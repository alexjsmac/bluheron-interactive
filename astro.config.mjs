// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Staging: served at www.alexmaclean.ca/bluheron-interactive/ (GitHub Pages
// project path). At cutover to the real domain, change to:
//   site: 'https://bluheroninteractive.com', base: '/' (or remove base)
// and set the custom domain on the repo's Pages settings.
export default defineConfig({
  site: 'https://www.alexmaclean.ca',
  base: '/bluheron-interactive',
  integrations: [sitemap()],
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Served at the apex domain. public/CNAME sets the GitHub Pages custom
// domain on deploy; withBase() in src/lib/url.ts resolves to bare paths
// now that there is no base prefix.
export default defineConfig({
  site: 'https://bluheroninteractive.com',
  integrations: [sitemap()],
});

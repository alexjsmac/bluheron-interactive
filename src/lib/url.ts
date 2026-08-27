// Prefixes internal paths with the configured base path, so the site works
// both at a subpath (staging on www.alexmaclean.ca/bluheron-interactive/)
// and at a domain root (bluheroninteractive.com after cutover) with only an
// astro.config.mjs change.
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const withBase = (path: string): string => `${base}${path}` || '/';

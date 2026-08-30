// Prefixes internal paths with the configured base path. The site now runs at
// a domain root, so this resolves to bare paths; it stays because it is what
// let the whole site move off the staging subpath with a one-line config edit.
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const withBase = (path: string): string => `${base}${path}` || '/';

// Cloudflare Web Analytics beacon token.
//
// Public by design — it ships in the page source, so it is not a secret and
// does not belong in a repo secret or an env var. Cookieless: the beacon sets
// no cookies and stores nothing on the device, which is why the site needs no
// consent banner.
//
// An empty string disables the script entirely, so the site builds and runs
// normally without it.
export const CF_BEACON_TOKEN = '';

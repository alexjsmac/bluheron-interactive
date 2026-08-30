// Guards the cookieless GA4 setup. The consent defaults are what keep this
// site free of a consent banner; relaxing them makes GA4 write _ga cookies
// with no visible symptom. Run after a build.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const html = [];
(function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && html.push(p);
  }
})('dist');

const required = [
  ["analytics_storage: 'denied'", 'consent default must deny analytics storage'],
  ["ad_storage: 'denied'", 'consent default must deny ad storage'],
  ['send_page_view: false', 'pageviews must be driven manually from astro:page-load'],
  ["addEventListener('astro:page-load'", 'the manual pageview listener must be present'],
];

let failed = 0;
const pages = html.filter((f) => readFileSync(f, 'utf8').includes('googletagmanager'));
if (!pages.length) {
  console.error('FAIL: no tagged pages found — is the measurement id set?');
  process.exit(1);
}
for (const [needle, why] of required) {
  const missing = pages.filter((f) => !readFileSync(f, 'utf8').includes(needle));
  if (missing.length) {
    console.error(`FAIL: ${why}\n  missing from ${missing.length}/${pages.length} tagged pages`);
    failed++;
  }
}
console.log(failed ? `\n${failed} check(s) failed` : `analytics guards pass across ${pages.length} tagged pages`);
process.exit(failed ? 1 : 0);

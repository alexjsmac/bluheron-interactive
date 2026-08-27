# bluheroninteractive.com

The BluHeron Interactive website — an [Astro](https://astro.build) static site
deployed to GitHub Pages.

**Design direction:** "Progressive Immersion" — warm paper base, dark luminous
bands, heron cyan (`#0097B2`) from the logo, Fraunces + Space Grotesk. Motion is
a progressive enhancement gated behind `prefers-reduced-motion`; the site works
completely without JavaScript.

## Commands

```sh
npm install       # once
npm run dev       # dev server at localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the build locally
```

## Adding a project

Drop a markdown file in `src/content/work/` (see `blue-noise.md` for the full
frontmatter shape) and its images in `src/assets/work/`. The work index, case
study page, and sitemap update automatically. News posts work the same way in
`src/content/news/`.

## Deploying

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

One-time setup:

1. Push this repo to GitHub.
2. In the repo settings → **Pages**, set **Source** to "GitHub Actions".
3. The site deploys to the repo's github.io URL until DNS is cut over.

### DNS cutover (from the current WordPress host)

`public/CNAME` already declares `bluheroninteractive.com`. When ready:

1. In repo settings → Pages → Custom domain, enter `bluheroninteractive.com`
   and wait for the DNS check + certificate.
2. At the DNS provider, point the apex at GitHub Pages
   (A records `185.199.108.153`, `.109.`, `.110.`, `.111.153`; AAAA optional)
   and `www` at `<user>.github.io` via CNAME.
3. Keep WordPress running until the new site answers on the domain with HTTPS,
   then retire it.

## Contact form

The form on `/contact/` is wired for [Formspree](https://formspree.io): create
a (free) form, then set `FORMSPREE_ID` at the top of
`src/pages/contact.astro`. Until then the page shows direct contact details
only.

## Accessibility budget

This site treats accessibility as the brand: WCAG 2.2 AA contrast in both
themes, full keyboard navigation, skip link, semantic landmarks, alt text
everywhere, and designed reduced-motion states (the homepage hero's still
composition, not a broken canvas). Please keep new pages to the same standard —
`/accessibility/` makes the promise public.

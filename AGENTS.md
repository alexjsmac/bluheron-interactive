# bluheron-interactive

BluHeron Interactive website: Astro on GitHub Pages.

## Workflow: branch → PR → green CI → merge

The workflow setup here is shared with alexjsmac's other site repos
(small-vibrations, bluheron-interactive, alexjsmac.github.io). When you change
it in one, change it in all three.

- `main` is protected by the `main` ruleset (`.github/rulesets/main.json`):
  a PR is required, the `CI` check must pass, force-pushes and deletion are
  blocked, and nobody can bypass it. There's no second approver (solo
  maintainer), so a green PR can be self-merged. Merges are squash-only.
- Work on a branch, open a PR, and merge it yourself once `CI` is green.
  Never push to `main` or bypass `CI`.
- Merging to `main` deploys to production via `.github/workflows/deploy.yml`.
- Before opening a PR, run `npm run verify`. `.github/workflows/ci.yml` runs
  the same script, so a local pass means a CI pass. It runs `astro check`, the
  build, and the analytics guard (`scripts/check-analytics.mjs`, which greps
  the built HTML).
- Node version: `.nvmrc`. CI reads it; deploy.yml's `withastro/action` takes
  a literal version, so keep that in sync by hand.
- Dependabot (`.github/dependabot.yml`) opens grouped update PRs every Monday,
  after a 3-day cooldown (7 for majors). TypeScript >=7 is ignored until the
  lint/type tooling supports it.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

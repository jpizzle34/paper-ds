# Package path

`@paper-ds/ui` is the same source as the registry, exported as a package. An app uses this path or the [registry path](consumers.md), not both for the same component.

The package is `"private": true` and version `0.0.0`. This repo does not publish it.

## What is already wired

`packages/ui/package.json` exports:

- `@paper-ds/ui/components/button`
- `@paper-ds/ui/components/alert`
- `@paper-ds/ui/components/badge`
- `@paper-ds/ui/globals.css`

`packages/ui/src/styles/globals.css` includes `@source "../**/*.{ts,tsx}"`, so a consumer's Tailwind build sees the component classes. Peer dependencies are `react`, `react-dom`, `radix-ui`, and `tailwindcss`.

## Try it without publishing

From another app, point pnpm at this checkout. Adjust the relative path:

```bash
pnpm add @paper-ds/ui@file:../paper-ds/packages/ui
```

In the app CSS, after Tailwind:

```css
@import "tailwindcss";
@import "@paper-ds/ui/globals.css";
```

```tsx
import { Button } from "@paper-ds/ui/components/button"
```

The gallery in this repo imports the package the same way.

## Publish later

These steps are not run by this repo yet.

1. Create a private npm org or a GitHub Packages repository. Authenticate with `pnpm login`, or set `NODE_AUTH_TOKEN` in CI.
2. In `packages/ui/package.json`, remove `"private": true`. Set `publishConfig.access` to `restricted`. Bump `version`.
3. From the repo root:

```bash
pnpm publish --filter @paper-ds/ui --access restricted
```

4. In the product app, replace the `file:` spec with `@paper-ds/ui@<version>` and run `pnpm install`.
5. Stay current by bumping that version and running `pnpm install`.

Changesets (a Version Packages pull request) and Renovate (bump pull requests in product apps) are optional later. Neither is set up here.

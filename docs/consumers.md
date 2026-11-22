# Install from the registry

The registry copies component source into your app. Those files stay in your app. Editing them does not change this repo. Use this path or the [package path](package-setup.md), not both for the same component. Installing Button both ways leaves you with two Buttons.

Start the gallery so the JSON is served:

```bash
npm run dev
```

The files are at `http://localhost:3000/r/button.json`. `base`, `alert`, and `badge` are there too.

## Register the namespace

From a project that already has `components.json`:

```bash
pnpm dlx shadcn@latest registry add @paper-ds=http://localhost:3000/r/{name}.json
```

## Install

```bash
pnpm dlx shadcn@latest add @paper-ds/button
```

`@paper-ds/base` pins the style to `radix-nova`, which is Radix plus the nova preset. shadcn 4.23 has no `config.base` field, so the style name is the pin. Add `base` when you want that pin. Add `button`, `alert`, or `badge` on their own when your app already has a theme.

After this repo is on GitHub, the same items install without the gallery running:

```bash
pnpm dlx shadcn@latest add <owner>/paper-ds/button
pnpm dlx shadcn@latest add <owner>/paper-ds/button#v1.2.0
```

The `#` ref pins a tag, branch, or commit.

## Stay current

```bash
pnpm dlx shadcn@latest add @paper-ds/button --diff
pnpm dlx shadcn@latest add @paper-ds/button --overwrite
```

`--diff` shows what `main` would change in your copy. `--overwrite` replaces your copy with `main` and discards local edits to that file. Nothing is written back to the library.

## Package path

Apps that want a versioned dependency instead of a copied file follow [package-setup.md](package-setup.md).

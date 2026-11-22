---
name: paper-ds-ship
description: Turn a named Paper revision into a pull request against the Paper DS library. Use when the user says propose or ship a component revision. Requires a component name and a revision number. Never merges and never publishes.
metadata:
  version: "1.0.0"
---

# Ship a Paper revision

This skill opens a proposal branch and a pull request. It does not merge, tag, or publish.

## Before writing code

1. Require a component name and a revision, such as Alert r3. "Looks good" and "keep these two" are not approval. If either piece is missing, ask.
2. If `paper-ds.json` is missing, or the Paper MCP has no file open, stop and say Paper is not connected. The next step is to open a Paper file and run `paper-ds-setup`. Do not invent artwork.
3. Load `paper-ds-land` and follow it for the design read and the code edit. Read styles from Paper. Edit the existing component in `packages/ui`. Do not paste a generated div tree. Limit the edit to the named component.
4. Apply exactly one pull-request tag:
   - `tokens` — theme CSS variables only
   - `visual` — classes or existing variants, no new props
   - `api` — props, behavior, or a new component

## Branch and checks

1. Branch from `main`: `ds/<component>/rN-<slug>`. Example: `ds/alert/r3-button-under-message`.
2. Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` from the repo root.
3. Commit on that branch only. Never commit to `main`.

## Pull request

The body includes a summary, the revision, the tag, and any remaining drift.

If `origin` exists, push the branch and run `gh pr create`. If it does not, stop after the commit and say the branch is ready.

Refuse to merge. Refuse to publish `@paper-ds/ui`.

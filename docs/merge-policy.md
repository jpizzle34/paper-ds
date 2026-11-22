# Merge policy

## Phase 1

Every proposal is a pull request. A person merges it. The agent never merges, never commits to `main`, and never publishes.

## Phase 2

Not automated. The labels exist so a later ruleset can auto-merge the safe ones.

The agent applies exactly one tag:

- `tokens` — theme CSS variables only. May auto-merge after checks.
- `visual` — classes or existing variants inside a component, no new props. May auto-merge after checks.
- `api` — props, behavior, or a new component. Always needs a person.

Checks are lint, typecheck, and build, in `.github/workflows/ci.yml`.

# Designer workflow

Designers work in Paper and chat. Git stays behind the agent.

## Words that matter

- **Draft rN** — a look on a Paper page. It is not in the library. Numbers only go up. Restoring an old look creates a new number.
- **Proposal** — a named idea that can sit beside other ideas, such as "Alert: button under the message". Each proposal is its own Paper page. The agent maps it to a git branch.
- **In review** — someone is looking at the proposal.
- **Shipped** — what `main` of this repo is.

## Phrases that do work

- "propose Alert r3"
- "ship Alert r3"

"Looks good" and "keep these two" do not approve or ship.

## What happens on ship

The agent follows `paper-ds-ship`. It edits `packages/ui` on a branch named `ds/<component>/rN-<slug>`, runs the checks, and opens a pull request when a remote exists. A person merges. The agent does not merge and does not publish.

Until a Paper file is connected, ship stops. Open a file in Paper Desktop and ask the agent to run `paper-ds-setup`.

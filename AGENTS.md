# AGENTS.md

This repository is a Cursor-first AI agent starter kit.

It provides:
- Cursor project rules
- reusable agent roles
- reusable skills
- workflows
- project memory
- task conventions

## Setup commands

```bash
npm install
npm run init
npm run check
```

## Project map

| Area | Path | Purpose |
|---|---|---|
| Cursor rules | `.cursor/rules/` | Persistent project instructions for Cursor |
| Cursor skills | `.cursor/skills/` | Reusable task-specific capabilities |
| Agents | `agents/` | Role definitions for coding agents |
| Workflows | `workflows/` | Repeatable procedures |
| Memory | `memory/` | Project decisions, preferences, learnings |
| Tasks | `tasks/` | Backlog and active tasks |
| Templates | `templates/` | Copyable starter templates |
| Docs | `docs/` | Human-facing documentation |

## Default agent behavior

For non-trivial work:

1. Read this file first.
2. Read the relevant rule in `.cursor/rules/`.
3. Read the relevant workflow in `workflows/`.
4. Inspect existing files before editing.
5. State assumptions and constraints.
6. Make the smallest useful change.
7. Run or suggest checks.
8. Summarize changed files and how to verify.

## Code style

- Prefer TypeScript or JavaScript when code is needed.
- Prefer explicit types in TypeScript projects.
- Avoid `any` unless justified.
- Keep functions small.
- Keep abstractions simple.
- Match existing project style.

## Safety

Never:
- expose secrets
- edit `.env` directly
- run destructive commands without confirmation
- push directly to `main`
- rewrite unrelated files
- perform broad refactors without a plan

## Success criteria

A task is complete only when:
- the requested behavior works
- code is minimal
- relevant checks pass or are clearly listed
- changed files are summarized
- remaining risks are disclosed

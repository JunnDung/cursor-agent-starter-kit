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
npm run validate  # check skill & rule structure
npm run generate:skill  # scaffold a new skill (interactive)
npm run generate:agent  # scaffold a new agent (interactive)
```

## npm Scripts

| Command | Purpose |
|---|---|
| `npm run init` | Initialize workspace directories |
| `npm run check` | Check workspace structure |
| `npm run validate` | Validate skill & rule structure |
| `npm run generate:skill` | Scaffold a new skill |
| `npm run generate:agent` | Scaffold a new agent |
| `npm run crag:analyze` | Generate governance.md (requires crag) |
| `npm run crag:compile` | Compile rules to all agent formats |

## Skill Structure

Each skill uses the two-layer pattern:
- `SKILL.md` — Always read: purpose, when-to-use, quick steps (< 120 lines)
- `GUIDE.md` — On demand: deeper patterns, examples, edge cases

See `.cursor/skills/routing.yaml` for the skill index.

## Rule Structure

Rules live in `.cursor/rules/` with frontmatter metadata:

```yaml
---
description: One sentence summary.
alwaysApply: true/false
priority: high/medium/low
tags: [tag1, tag2]
---
```

Always-on rules: 00-core, 01-karpathy-behavior, 03-surgical-changes, 05-security.
Task-specific rules: 02-agent-workflow, 04-architecture, 06-testing, 07-docs, 08-memory, 09-approval-workflow, 10-context-optimization, 11-rule-testing.

## Workflows

| Workflow | Use when |
|---|---|
| `plan.md` | Planning a feature |
| `implement.md` | Building a feature |
| `review.md` | Reviewing code |
| `debug.md` | Debugging a bug |
| `reflect.md` | Extracting learnings |
| `evaluator-optimizer.md` | Quality assurance loops |
| `human-gate.md` | Critical decision checkpoints |

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

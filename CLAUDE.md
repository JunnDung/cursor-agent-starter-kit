# Claude Code and Cursor Cross-Platform Agent Starter Kit

This project is designed to work across multiple AI coding tools. This file (`CLAUDE.md`) serves as the **canonical cross-tool instruction source** for Claude Code, Codex, and other tools that read this file.

For Cursor-specific rules, see `.cursor/rules/`.
For skill definitions, see `.cursor/skills/`.

## Quick Start

```bash
npm install
npm run init
```

Then ask your AI assistant:

```
Read AGENTS.md and workflows/onboard.md. Summarize this project and recommend the next step.
```

## Project Purpose

A workspace template that gives AI coding agents structured rules, skills, workflows, memory, and safer coding behavior. Reduces agent mistakes: over-assumption, over-complication, unrelated edits, skipped verification, and forgotten preferences.

## Core Principles

1. **Think before coding** — state assumptions, surface trade-offs, ask when blocked.
2. **Simplicity first** — minimum code that solves the stated problem.
3. **Surgical changes** — touch only necessary code, match existing style.
4. **Goal-driven execution** — define success criteria before starting.
5. **Verify before claiming done** — run checks, list remaining risks.

## Workflows

| Workflow | Use when |
|---|---|
| `workflows/plan.md` | Planning a feature |
| `workflows/implement.md` | Building a feature |
| `workflows/review.md` | Reviewing code |
| `workflows/debug.md` | Debugging a bug |
| `workflows/reflect.md` | After-Action Review (AAR) |
| `workflows/evaluator-optimizer.md` | Quality assurance |
| `workflows/human-gate.md` | Approval before changes |

## Agent Roles

| Agent | Purpose |
|---|---|
| `agents/implementer.md` | Build features with surgical changes |
| `agents/code-reviewer.md` | Review code quality |
| `agents/bug-fixer.md` | Find and fix bugs minimally |
| `agents/test-writer.md` | Write regression tests |
| `agents/refactorer.md` | Safe refactoring |
| `agents/researcher.md` | Explore and summarize codebase |

## Skills

Skills live in `.cursor/skills/`. Each skill follows a two-layer pattern:
- `SKILL.md` — always read: purpose, when-to-use, quick steps
- `GUIDE.md` — on demand: deeper patterns, examples, edge cases

Key skills:
- `code-review/` — review code changes
- `debug-bug/` — find and fix bugs
- `create-agent/` — create new agent roles
- `create-tool/` — add MCP tools
- `refactor-safely/` — safe refactoring
- `write-tests/` — write regression tests

## Memory

| File | Purpose |
|---|---|
| `memory/project.md` | Project identity and purpose |
| `memory/decisions.md` | Architecture decisions |
| `memory/preferences.md` | Team/user preferences |
| `memory/learnings.md` | Session lessons and research |

Update memory files after meaningful decisions or repeated corrections.

## Rules

Always-on rules (`.cursor/rules/`):
- `00-core.mdc` — core behavior expectations
- `01-karpathy-behavior.mdc` — reduce common AI mistakes
- `03-surgical-changes.mdc` — minimal edit discipline
- `05-security.mdc` — secrets, shell safety, dependencies

Task-specific rules:
- `02-agent-workflow.mdc` — when to use which workflow
- `04-architecture.mdc` — architecture conventions
- `06-testing.mdc` — testing and verification
- `07-docs.mdc` — documentation standards
- `08-memory.mdc` — memory file updates
- `09-approval-workflow.mdc` — approval gates
- `10-context-optimization.mdc` — token efficiency
- `11-rule-testing.mdc` — rule validation

## Verification

Run before claiming done:

```bash
npm run validate   # skill and rule structure
npm run check      # workspace health check
```

## Success Criteria

A task is complete when:
- Requested behavior works
- Code is minimal
- Relevant checks pass
- Changed files are summarized
- Remaining risks are disclosed

## Safety Rules

Never:
- Expose secrets or API keys
- Edit `.env` directly
- Run destructive commands without confirmation
- Push directly to `main`
- Rewrite unrelated files
- Perform broad refactors without a plan

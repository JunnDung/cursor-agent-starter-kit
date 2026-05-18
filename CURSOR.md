# Using this repo with Cursor

This repository includes Cursor project rules and project-level skills.

## How to use

1. Open this folder in Cursor.
2. Cursor will load project rules from `.cursor/rules/`.
3. Start by asking Cursor:

```txt
Read AGENTS.md and summarize how this project is organized.
```

## Recommended first prompt

```txt
Read AGENTS.md, .cursor/rules/00-core.mdc, and workflows/onboard.md.

Help me understand this workspace.
Before editing anything, summarize:
1. project purpose
2. important folders
3. available rules
4. available skills
5. recommended next step
```

## Recommended implementation prompt

```txt
Use workflows/plan.md before implementing.
Use agents/implementer.md when coding.
Use .cursor/rules/03-surgical-changes.mdc to keep edits focused.
```

## Rules

Rules live in:

```txt
.cursor/rules/
```

Use always-on rules only for behavior that should apply to every task.
Use optional rules for architecture, testing, docs, and workflow-specific guidance.

## Skills

Skills live in:

```txt
.cursor/skills/
```

Use skills for repeatable tasks such as:
- creating a new agent
- creating a new tool
- reviewing code
- debugging bugs
- refactoring safely
- writing tests

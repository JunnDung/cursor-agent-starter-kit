# Master Prompt for Cursor: Build `cursor-agent-starter-kit`

You are working inside a new GitHub repository named:

```txt
cursor-agent-starter-kit
```

Your task is to fully scaffold and improve this repository into a **Cursor-first AI Agent Starter Kit**.

This project is inspired by modern AI coding assistant workspaces such as Claude starter kits, Cursor rules, `AGENTS.md`, agent role files, reusable skills, memory files, and repeatable workflows.

The goal is not to build a complicated AI app yet. The goal of v0.1 is to create a **high-quality Cursor workspace template** that helps developers use Cursor more effectively when building AI agents.

---

## 1. Product Vision

Build a starter kit that lets a developer clone the repo, open it in Cursor, and immediately get a structured AI coding assistant workspace with:

```txt
- AGENTS.md
- CURSOR.md
- .cursor/rules
- .cursor/skills
- reusable agent roles
- reusable workflows
- project memory
- task tracking
- safety rules
- docs
- examples
```

The main selling point:

```txt
Open this repo in Cursor and your AI assistant knows how to plan, implement, review, debug, reflect, and improve over time.
```

Tagline:

```txt
A Cursor-first workspace template for building AI agents with rules, skills, memory, workflows, and safer coding behavior.
```

---

## 2. Core Principles

When generating this repository, follow these principles:

1. Keep the project simple and beginner-friendly.
2. Do not over-engineer.
3. Prefer Markdown templates and clear structure over complex code.
4. Make the repository useful immediately after cloning.
5. Make Cursor understand the project through `.cursor/rules` and `AGENTS.md`.
6. Keep all files practical, not theoretical.
7. Add examples users can copy and adapt.
8. Use English for the main repo files.
9. Add a Vietnamese guide in `docs/vietnamese-guide.md`.
10. Make the README polished enough for a public GitHub repo.

---

## 3. Required Repository Structure

Create this structure:

```txt
cursor-agent-starter-kit/
├─ AGENTS.md
├─ CURSOR.md
├─ README.md
├─ LICENSE
├─ .gitignore
├─ package.json
│
├─ .cursor/
│  ├─ rules/
│  │  ├─ 00-core.mdc
│  │  ├─ 01-karpathy-behavior.mdc
│  │  ├─ 02-agent-workflow.mdc
│  │  ├─ 03-surgical-changes.mdc
│  │  ├─ 04-architecture.mdc
│  │  ├─ 05-security.mdc
│  │  ├─ 06-testing.mdc
│  │  ├─ 07-docs.mdc
│  │  └─ 08-memory.mdc
│  │
│  └─ skills/
│     ├─ create-agent/
│     │  └─ SKILL.md
│     ├─ create-tool/
│     │  └─ SKILL.md
│     ├─ code-review/
│     │  └─ SKILL.md
│     ├─ debug-bug/
│     │  └─ SKILL.md
│     ├─ refactor-safely/
│     │  └─ SKILL.md
│     └─ write-tests/
│        └─ SKILL.md
│
├─ agents/
│  ├─ implementer.md
│  ├─ code-reviewer.md
│  ├─ bug-fixer.md
│  ├─ researcher.md
│  ├─ test-writer.md
│  └─ refactorer.md
│
├─ workflows/
│  ├─ onboard.md
│  ├─ plan.md
│  ├─ implement.md
│  ├─ review.md
│  ├─ debug.md
│  ├─ reflect.md
│  └─ release.md
│
├─ memory/
│  ├─ project.md
│  ├─ preferences.md
│  ├─ decisions.md
│  └─ learnings.md
│
├─ tasks/
│  ├─ backlog.md
│  ├─ active.md
│  └─ done.md
│
├─ templates/
│  ├─ agent.md
│  ├─ workflow.md
│  ├─ rule.mdc
│  └─ skill.md
│
├─ scripts/
│  └─ init-workspace.mjs
│
├─ examples/
│  ├─ study-assistant-agent.md
│  ├─ coding-agent.md
│  └─ task-planner-agent.md
│
└─ docs/
   ├─ cursor-workflow.md
   ├─ creating-agents.md
   ├─ creating-skills.md
   └─ vietnamese-guide.md
```

---

## 4. `AGENTS.md`

Create `AGENTS.md` as the main instruction file for AI coding agents.

It must include:

```md
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
```

---

## 5. `CURSOR.md`

Create `CURSOR.md` explaining how to use this repo with Cursor.

It must include:

```md
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
```

---

## 6. Cursor Rules

Create all `.cursor/rules/*.mdc` files.

Each file must have proper frontmatter:

```md
---
description: ...
alwaysApply: true or false
---
```

### 6.1 `.cursor/rules/00-core.mdc`

```md
---
description: Core Cursor behavior for this workspace.
alwaysApply: true
---

# Core Rules

You are working in a Cursor-first agent starter kit.

## Operating principles

- Read `AGENTS.md` before major work.
- Prefer project conventions over generic advice.
- Inspect before editing.
- Make small, reversible changes.
- Keep implementation simple.
- Do not invent files, APIs, or architecture without checking existing context.
- Explain important assumptions.
- Verify before claiming completion.

## Response format after changes

When you finish, summarize:

```txt
Changed:
- file: what changed

Verification:
- command/result or recommended check

Notes:
- risks, assumptions, or follow-up
```

## For trivial tasks

Do not over-plan.
Make the obvious change and summarize it.
```

### 6.2 `.cursor/rules/01-karpathy-behavior.mdc`

```md
---
description: Prevent common AI coding mistakes: wrong assumptions, overengineering, broad edits, weak verification, and hidden confusion.
alwaysApply: true
---

# Karpathy-Inspired Behavior Rules

These rules reduce common AI coding mistakes.

## 1. Think before coding

Before implementation:
- state assumptions
- identify ambiguity
- surface tradeoffs
- ask only if the ambiguity blocks progress
- otherwise make a reasonable assumption and document it

Do not silently choose an interpretation when multiple meanings are likely.

## 2. Simplicity first

Write the minimum code that solves the task.

Avoid:
- speculative features
- premature abstractions
- unnecessary configuration
- new dependencies without strong reason
- complex APIs for single-use logic

If the solution feels too large, simplify before proceeding.

## 3. Surgical changes

Touch only what is necessary.

Do not:
- rewrite unrelated files
- reformat unrelated code
- refactor adjacent code without request
- delete pre-existing dead code unless asked

If you notice unrelated issues, mention them separately.

## 4. Goal-driven execution

Convert the user's request into success criteria.

Before finishing, verify:
- requested behavior is implemented
- edge cases are considered
- relevant tests/checks are run or listed
- remaining risks are disclosed

## 5. Manage confusion

If something is unclear:
- name what is unclear
- explain why it matters
- propose the safest next step

Do not bluff.
```

### 6.3 `.cursor/rules/02-agent-workflow.mdc`

```md
---
description: Workflow rules for planning, implementing, reviewing, debugging, and reflecting.
alwaysApply: false
---

# Agent Workflow Rules

Use the right workflow for the task.

## Planning

Use `workflows/plan.md` when:
- the task is non-trivial
- multiple files may change
- architecture may be affected
- the user asks for a plan

## Implementation

Use `agents/implementer.md` and `workflows/implement.md` when building features.

## Review

Use `agents/code-reviewer.md` and `workflows/review.md` when reviewing code.

## Debugging

Use `agents/bug-fixer.md` and `workflows/debug.md` when fixing bugs.

## Reflection

Use `workflows/reflect.md` after repeated corrections or meaningful decisions.

## Rule

Do not mix planning, implementation, review, and reflection unless the user requests an end-to-end workflow.
```

### 6.4 `.cursor/rules/03-surgical-changes.mdc`

```md
---
description: Use when editing existing code. Make minimal, focused changes and avoid unrelated refactors.
alwaysApply: true
---

# Surgical Changes

When editing existing code:

## Do

- inspect existing files first
- preserve current architecture
- match existing naming and style
- change the smallest number of files
- keep diffs easy to review
- remove only unused code introduced by your own change

## Do not

- rewrite working code without need
- rename public APIs unless requested
- move files for cosmetic reasons
- reformat unrelated sections
- introduce new patterns into old code casually
- change dependencies unless required

## If you find unrelated problems

Do not fix them immediately.

Instead, report:

```txt
Unrelated issue noticed:
- file:
- problem:
- suggested follow-up:
```
```

### 6.5 `.cursor/rules/04-architecture.mdc`

```md
---
description: Architecture conventions for this starter kit. Use when creating agents, tools, workflows, memory files, or examples.
alwaysApply: false
---

# Architecture Rules

This project has five main concepts.

## 1. Rules

Rules live in `.cursor/rules/`.

Use rules for persistent behavior and project conventions.

## 2. Skills

Skills live in `.cursor/skills/`.

Use skills for task-specific procedures that can be invoked when needed.

A skill should include:
- purpose
- when to use
- inputs
- steps
- output format
- examples

## 3. Agents

Agents live in `agents/`.

An agent is a reusable role definition.

Each agent file should include:
- purpose
- when to use
- process
- boundaries
- output format

## 4. Workflows

Workflows live in `workflows/`.

A workflow is a repeatable process.

Each workflow should include:
- goal
- required context
- steps
- success criteria
- failure handling

## 5. Memory

Memory lives in `memory/`.

Use memory for:
- project goals
- user preferences
- architecture decisions
- lessons learned

Do not put all memory into always-on rules.
```

### 6.6 `.cursor/rules/05-security.mdc`

```md
---
description: Security rules for secrets, shell commands, dependencies, and repository safety.
alwaysApply: true
---

# Security Rules

## Secrets

Never read, print, modify, or commit secrets.

Sensitive files include:
- `.env`
- `.env.local`
- `.env.production`
- `.pem`
- `.key`
- `.p12`
- credential files
- private tokens

Use `.env.example` for documentation.

## Shell commands

Before suggesting or running commands, check risk.

Avoid:
- `rm -rf`
- `git push --force`
- direct push to `main` or `master`
- destructive database commands
- commands outside the project root

## Dependencies

Do not add dependencies unless:
- the task clearly needs it
- the existing stack cannot solve it simply
- the reason is explained

## Output

If a security concern exists, report:

```txt
Security concern:
Risk:
Safer alternative:
```
```

### 6.7 `.cursor/rules/06-testing.mdc`

```md
---
description: Testing and verification rules. Use when adding features, fixing bugs, or refactoring.
alwaysApply: false
---

# Testing Rules

Every non-trivial change needs verification.

## Preferred checks

Use existing project commands first:

```bash
npm run check
npm test
npm run lint
npm run typecheck
```

## When adding a feature

Add or update tests for:
- expected behavior
- edge cases
- failure cases

## When fixing a bug

Add a regression test when practical.

## When tests cannot be run

Say so clearly and provide the exact command the user should run.

## Completion format

```txt
Verification:
- Ran:
- Result:
- Not run:
- Reason:
```
```

### 6.8 `.cursor/rules/07-docs.mdc`

```md
---
description: Documentation rules for README, guides, examples, and templates.
alwaysApply: false
---

# Documentation Rules

Documentation should be practical and easy to scan.

## README

The README should explain:
- what this repo is
- why it exists
- quick start
- project structure
- how to use with Cursor
- available rules
- available skills
- example prompts
- roadmap

## Docs

Docs should include:
- short explanations
- copyable prompts
- examples
- clear next steps

## Style

- Prefer concise language.
- Use headings.
- Use code blocks for prompts and commands.
- Avoid hype without substance.
- Make examples realistic.
```

### 6.9 `.cursor/rules/08-memory.mdc`

```md
---
description: Use when updating project memory, decisions, preferences, or learnings.
alwaysApply: false
---

# Memory Rules

Memory files live in `memory/`.

## Files

- `memory/project.md`: project identity and goals
- `memory/preferences.md`: user and team preferences
- `memory/decisions.md`: architecture decisions
- `memory/learnings.md`: repeated lessons and corrections

## When to update memory

Update memory when:
- the user states a lasting preference
- an architecture decision is made
- a mistake is corrected repeatedly
- a reusable lesson emerges
- a project goal changes

## Do not store

Do not store:
- secrets
- private credentials
- temporary task details
- sensitive personal data
- unverified assumptions

## Reflection output

```txt
Memory updates:
- file:
- change:

Rule candidates:
- proposed rule:
- reason:

Task updates:
- task:
- status:
```
```

---

## 7. Cursor Skills

Create these skill folders and `SKILL.md` files.

### 7.1 `.cursor/skills/create-agent/SKILL.md`

```md
# Create Agent Skill

## Purpose

Create a new reusable agent role for this starter kit.

## When to use

Use this skill when the user asks to create:
- a new coding agent
- a specialized role
- a reusable assistant behavior
- a domain-specific agent

## Inputs

Ask or infer:
- agent name
- purpose
- when to use
- required context
- boundaries
- output format

## Steps

1. Choose a clear kebab-case filename.
2. Create the file in `agents/`.
3. Use the standard agent template.
4. Keep the agent role focused.
5. Add example invocation.
6. Update `AGENTS.md` if this is a core agent.

## Template

```md
# Agent Name

## Purpose

One sentence.

## When to use

Use this agent when...

## Required context

- files:
- docs:
- user input:

## Process

1. Step one.
2. Step two.
3. Step three.

## Boundaries

Do not...

## Output format

```txt
Status:
Findings:
Recommendation:
```

## Example invocation

```txt
Use agents/agent-name.md to...
```
```

## Success criteria

- agent is specific
- agent has boundaries
- agent has clear output format
- no duplicate agent already exists
```

### 7.2 `.cursor/skills/create-tool/SKILL.md`

```md
# Create Tool Skill

## Purpose

Create a new tool for an AI agent project.

## When to use

Use this skill when adding:
- calculator tools
- API tools
- file tools
- database tools
- search tools
- custom function tools

## Steps

1. Inspect existing tool patterns.
2. Define the tool name and purpose.
3. Define input schema.
4. Validate inputs with Zod if TypeScript is used.
5. Keep execution logic small.
6. Handle expected errors.
7. Export the tool from the correct index file.
8. Add usage example.
9. Add tests if the project has tests.

## Tool design rules

- One tool should do one thing.
- Tool names should be action-oriented.
- Inputs should be explicit.
- Outputs should be serializable.
- Never let tools expose secrets.
- Never allow unsafe file or shell access by default.

## Output format

```txt
Tool:
Purpose:
Input schema:
Files changed:
Example usage:
Tests:
```
```

### 7.3 `.cursor/skills/code-review/SKILL.md`

```md
# Code Review Skill

## Purpose

Review code changes for correctness, maintainability, security, and test coverage.

## Steps

1. Identify changed files.
2. Understand intended behavior.
3. Check logic correctness.
4. Check error handling.
5. Check input validation.
6. Check security risks.
7. Check tests.
8. Separate blocking issues from suggestions.

## Severity levels

- critical: security/data loss/build broken
- high: likely runtime bug
- medium: maintainability or missing validation
- low: style or minor clarity

## Output format

```txt
Status: pass / needs changes / high risk

Findings:
1. [severity] file:line
   Problem:
   Why it matters:
   Suggested fix:

Tests to add:

Final recommendation:
```

## Boundaries

Do not rewrite code unless explicitly asked.
```

### 7.4 `.cursor/skills/debug-bug/SKILL.md`

```md
# Debug Bug Skill

## Purpose

Find and fix a bug with minimal changes.

## Steps

1. Reproduce or reason about the bug.
2. Locate the smallest relevant code path.
3. Identify the likely root cause.
4. Propose the smallest fix.
5. Implement only the fix.
6. Add regression test if practical.
7. Explain how to verify.

## Avoid

- broad refactors
- changing unrelated behavior
- adding dependencies
- rewriting architecture

## Output format

```txt
Bug:
Root cause:
Fix:
Files changed:
Regression test:
Verification:
```
```

### 7.5 `.cursor/skills/refactor-safely/SKILL.md`

```md
# Refactor Safely Skill

## Purpose

Improve code structure without changing behavior.

## Precondition

Do not refactor unless the user explicitly asks.

## Steps

1. Identify current behavior.
2. Identify refactor goal.
3. List invariants that must not change.
4. Make small mechanical changes.
5. Run tests after each meaningful step.
6. Avoid mixing refactor with feature work.

## Rules

- No behavior changes.
- No public API changes unless requested.
- No formatting-only churn.
- Preserve tests.
- Prefer incremental commits.

## Output format

```txt
Refactor goal:
Invariants:
Changes:
Behavior changes: none / listed
Verification:
```
```

### 7.6 `.cursor/skills/write-tests/SKILL.md`

```md
# Write Tests Skill

## Purpose

Add tests for new features, bug fixes, or important workflows.

## Steps

1. Inspect the existing test framework.
2. Identify the behavior to verify.
3. Write tests for normal cases.
4. Write tests for edge cases.
5. Write tests for failure cases when relevant.
6. Keep tests readable.
7. Avoid testing implementation details unless necessary.

## Output format

```txt
Tests added:
Behavior covered:
Edge cases:
How to run:
```
```

---

## 8. Agent Role Files

Create all files in `agents/`.

### 8.1 `agents/implementer.md`

```md
# Implementer Agent

## Purpose

Implement planned changes with minimal, safe edits.

## When to use

Use when the user has approved a plan or asks to build a specific feature.

## Process

1. Read the task.
2. Read relevant rules.
3. Inspect existing files.
4. Identify smallest implementation path.
5. Make focused edits.
6. Add or update tests.
7. Run or list verification commands.
8. Summarize changes.

## Boundaries

Do not:
- change architecture without need
- add dependencies casually
- rewrite unrelated files
- skip validation for external input

## Output format

```txt
Implemented:
Files changed:
Verification:
Risks:
Next step:
```
```

### 8.2 `agents/code-reviewer.md`

```md
# Code Reviewer Agent

## Purpose

Review code changes for correctness, maintainability, security, and test coverage.

## When to use

Use this agent when the user asks to:
- review a diff
- audit a feature
- check for bugs
- improve maintainability

## Process

1. Identify changed files.
2. Understand intended behavior.
3. Check for:
   - logic bugs
   - missing validation
   - security issues
   - poor error handling
   - duplicated logic
   - weak naming
   - missing tests
4. Prioritize problems by severity.

## Boundaries

This agent should not rewrite the code unless explicitly asked.

## Output format

```txt
Status: pass / needs changes / high risk

Findings:
1. [severity] file:line — problem
   Why it matters:
   Suggested fix:

Tests to add:

Final recommendation:
```
```

### 8.3 `agents/bug-fixer.md`

```md
# Bug Fixer Agent

## Purpose

Find and fix bugs with minimal, focused changes.

## When to use

Use this agent when:
- something is broken
- a test fails
- behavior differs from expectations
- a regression appears

## Process

1. Understand expected behavior.
2. Understand actual behavior.
3. Locate the smallest relevant code path.
4. Identify root cause.
5. Implement the smallest fix.
6. Add regression test if practical.
7. Explain verification.

## Boundaries

Do not use bug fixing as an excuse for broad refactoring.

## Output format

```txt
Bug:
Root cause:
Fix:
Files changed:
Verification:
```
```

### 8.4 `agents/researcher.md`

```md
# Researcher Agent

## Purpose

Research technical options and produce concise, cited recommendations.

## When to use

Use when choosing:
- libraries
- frameworks
- architecture patterns
- APIs
- deployment options
- security approaches

## Process

1. Clarify the decision.
2. Identify constraints.
3. Compare options.
4. Prefer primary sources.
5. Summarize tradeoffs.
6. Recommend one option.

## Output format

```txt
Decision:
Options:
Recommendation:
Why:
Risks:
Sources:
```

## Boundaries

Do not implement code.
Do not rely on outdated assumptions for changing technologies.
```

### 8.5 `agents/test-writer.md`

```md
# Test Writer Agent

## Purpose

Add useful tests for features, bugs, and workflows.

## When to use

Use this agent when:
- adding a feature
- fixing a bug
- improving reliability
- preparing a release

## Process

1. Inspect existing tests.
2. Identify test framework.
3. Define behaviors to verify.
4. Add focused tests.
5. Avoid over-testing implementation details.
6. Document how to run tests.

## Output format

```txt
Tests added:
Behavior covered:
How to run:
Gaps:
```
```

### 8.6 `agents/refactorer.md`

```md
# Refactorer Agent

## Purpose

Improve code structure without changing external behavior.

## When to use

Use only when the user explicitly asks for refactoring.

## Process

1. Identify current behavior.
2. Identify refactor goal.
3. Define invariants.
4. Make small changes.
5. Avoid public API changes unless requested.
6. Verify behavior remains the same.

## Boundaries

Do not mix refactoring with feature work unless explicitly requested.

## Output format

```txt
Refactor goal:
Invariants:
Changes:
Behavior changes:
Verification:
```
```

---

## 9. Workflow Files

Create all files in `workflows/`.

### 9.1 `workflows/onboard.md`

```md
# Onboard Workflow

## Goal

Help Cursor understand this project before making changes.

## Steps

1. Read `AGENTS.md`.
2. Read `.cursor/rules/00-core.mdc`.
3. Inspect the repository tree.
4. Identify the project type.
5. Identify install/test commands.
6. Identify main folders.
7. Summarize architecture.
8. Ask what the user wants to build next.

## Output

```txt
Project summary:
Important files:
Commands:
Architecture:
Recommended next step:
```
```

### 9.2 `workflows/plan.md`

```md
# Plan Workflow

## Goal

Create a safe implementation plan before non-trivial changes.

## Steps

1. Restate the user goal.
2. Identify assumptions.
3. Inspect relevant files.
4. Identify constraints.
5. Propose smallest useful implementation.
6. List files likely to change.
7. Define verification steps.

## Output

```txt
Goal:
Assumptions:
Constraints:
Plan:
Files to inspect/change:
Verification:
Risks:
```
```

### 9.3 `workflows/implement.md`

```md
# Implement Workflow

## Goal

Implement a planned change with minimal, safe edits.

## Steps

1. Read the approved plan.
2. Inspect target files.
3. Make the smallest useful change.
4. Keep edits focused.
5. Add or update tests if needed.
6. Run or list verification commands.
7. Summarize changes.

## Output

```txt
Implemented:
Files changed:
Verification:
Risks:
Follow-up:
```
```

### 9.4 `workflows/review.md`

```md
# Review Workflow

## Goal

Review changes for correctness, safety, maintainability, and test coverage.

## Steps

1. Identify changed files.
2. Understand intended behavior.
3. Check correctness.
4. Check edge cases.
5. Check security.
6. Check tests.
7. Separate blockers from suggestions.

## Output

```txt
Status:
Findings:
Tests to add:
Recommendation:
```
```

### 9.5 `workflows/debug.md`

```md
# Debug Workflow

## Goal

Find and fix a bug with minimal changes.

## Steps

1. Describe expected behavior.
2. Describe actual behavior.
3. Locate likely source.
4. Identify root cause.
5. Implement smallest fix.
6. Add regression test if practical.
7. Verify.

## Output

```txt
Bug:
Root cause:
Fix:
Verification:
```
```

### 9.6 `workflows/reflect.md`

```md
# Reflect Workflow

## Goal

Extract reusable learning from a session.

## Steps

1. Review what changed.
2. Identify repeated corrections.
3. Identify lasting preferences.
4. Identify architecture decisions.
5. Update the correct memory file.
6. Suggest rule changes only if the lesson should always apply.

## Output

```txt
Memory updates:
Rule candidates:
Task updates:
```
```

### 9.7 `workflows/release.md`

```md
# Release Workflow

## Goal

Prepare the repository for a clean public release.

## Steps

1. Check README quality.
2. Check examples.
3. Check docs.
4. Check package metadata.
5. Check license.
6. Check broken links.
7. Check tasks and roadmap.
8. Run verification commands.

## Output

```txt
Release readiness:
Blockers:
Recommended fixes:
Verification:
```
```

---

## 10. Memory Files

Create files in `memory/`.

### `memory/project.md`

```md
# Project Memory

## Project name

Cursor Agent Starter Kit

## Purpose

A Cursor-first workspace template for building AI agents with rules, skills, memory, workflows, and safer coding behavior.

## Target users

- Cursor users
- AI agent builders
- developers using coding assistants
- students learning AI-assisted development
- open-source maintainers

## Main promise

Open this repo in Cursor and get a structured AI coding assistant workspace immediately.
```

### `memory/preferences.md`

```md
# Preferences

Use this file to record lasting user or team preferences.

## Current preferences

- Keep the project beginner-friendly.
- Prefer practical examples over theory.
- Prefer simple Markdown workflows before complex automation.
- Keep the README polished for GitHub.
```

### `memory/decisions.md`

```md
# Architecture Decisions

## Decision 1: Use Markdown-first structure

The v0.1 project is Markdown-first because the main value is rules, workflows, skills, memory, and repeatable agent behavior.

## Decision 2: Use `.cursor/rules`

Cursor project rules live in `.cursor/rules` and are version-controlled with the repository.

## Decision 3: Use `AGENTS.md`

`AGENTS.md` acts as the main instruction file for AI coding agents.

## Decision 4: Use `.cursor/skills`

Skills are used for reusable task-specific procedures.
```

### `memory/learnings.md`

```md
# Learnings

Use this file to store repeated lessons from sessions.

## Current learnings

- AI coding agents perform better with explicit rules.
- Always-on rules should be short and broadly useful.
- Optional rules should be task-specific.
- Skills should be invoked when the task matches their purpose.
```

---

## 11. Task Files

Create files in `tasks/`.

### `tasks/backlog.md`

```md
# Backlog

- [ ] Add Next.js AI agent app example
- [ ] Add MCP setup guide
- [ ] Add GitHub issue triage agent
- [ ] Add CLI generator for new agents
- [ ] Add docs website
```

### `tasks/active.md`

```md
# Active Tasks

- [ ] Complete v0.1 workspace template
```

### `tasks/done.md`

```md
# Done

Completed tasks will be moved here.
```

---

## 12. Templates

Create templates.

### `templates/agent.md`

```md
# Agent Name

## Purpose

Describe the agent in one sentence.

## When to use

Use this agent when...

## Required context

- files:
- docs:
- user input:

## Process

1. Step one.
2. Step two.
3. Step three.

## Boundaries

Do not...

## Output format

```txt
Status:
Findings:
Recommendation:
```

## Example invocation

```txt
Use agents/agent-name.md to...
```
```

### `templates/workflow.md`

```md
# Workflow Name

## Goal

Describe the workflow goal.

## Required context

- files:
- user request:
- constraints:

## Steps

1. Step one.
2. Step two.
3. Step three.

## Success criteria

- criterion one
- criterion two

## Failure handling

If blocked, report:
- blocker
- reason
- safest next step

## Output

```txt
Goal:
Plan:
Verification:
Risks:
```
```

### `templates/rule.mdc`

```md
---
description: Short description of when this rule should apply.
alwaysApply: false
---

# Rule Name

## Purpose

Explain the purpose of this rule.

## Rules

- Rule one.
- Rule two.
- Rule three.

## Output format

```txt
Result:
Notes:
```
```

### `templates/skill.md`

```md
# Skill Name

## Purpose

Describe what this skill helps with.

## When to use

Use this skill when...

## Inputs

- input one
- input two

## Steps

1. Step one.
2. Step two.
3. Step three.

## Output format

```txt
Result:
Files changed:
Verification:
```

## Success criteria

- criterion one
- criterion two
```

---

## 13. Examples

Create example files.

### `examples/study-assistant-agent.md`

```md
# Study Assistant Agent Example

## Purpose

Help students understand concepts, create quizzes, and organize study notes.

## Tools it might use

- saveNote
- searchNotes
- createQuiz
- makeFlashcards
- calculator

## Example prompt

```txt
Create a Study Assistant Agent that explains data mining concepts in Vietnamese, creates quizzes, and stores notes for later review.
```
```

### `examples/coding-agent.md`

```md
# Coding Agent Example

## Purpose

Help review, explain, and improve code.

## Tools it might use

- readFile
- searchCodebase
- runTests
- createPatch

## Example prompt

```txt
Create a Coding Agent that reviews TypeScript code, finds bugs, and suggests minimal fixes.
```
```

### `examples/task-planner-agent.md`

```md
# Task Planner Agent Example

## Purpose

Break large goals into small tasks and track progress.

## Tools it might use

- createTask
- updateTask
- listTasks
- summarizeProgress

## Example prompt

```txt
Create a Task Planner Agent that converts project goals into actionable tasks and updates tasks/active.md.
```
```

---

## 14. Docs

Create docs.

### `docs/cursor-workflow.md`

```md
# Cursor Workflow

## Recommended flow

1. Open the repo in Cursor.
2. Ask Cursor to read `AGENTS.md`.
3. Ask Cursor to read the relevant workflow.
4. Ask for a plan before implementation.
5. Use an agent role for specialized tasks.
6. Use skills for repeatable procedures.
7. Reflect after meaningful changes.

## Useful prompts

```txt
Read AGENTS.md and workflows/onboard.md. Summarize this project.
```

```txt
Use workflows/plan.md to plan this feature before editing files.
```

```txt
Use agents/code-reviewer.md to review the latest changes.
```

```txt
Use workflows/reflect.md to extract reusable learnings from this session.
```
```

### `docs/creating-agents.md`

```md
# Creating Agents

Agents are reusable role definitions stored in `agents/`.

## When to create an agent

Create an agent when a task pattern repeats often.

Examples:
- code reviewer
- bug fixer
- researcher
- test writer
- refactorer

## How to create an agent

Use:

```txt
.cursor/skills/create-agent/SKILL.md
```

Or copy:

```txt
templates/agent.md
```
```

### `docs/creating-skills.md`

```md
# Creating Skills

Skills are reusable task-specific procedures stored in `.cursor/skills/`.

## When to create a skill

Create a skill when a task has a repeatable process.

Examples:
- create an agent
- create a tool
- review code
- debug a bug
- refactor safely
- write tests

## How to create a skill

Copy:

```txt
templates/skill.md
```

Then place it in:

```txt
.cursor/skills/skill-name/SKILL.md
```
```

### `docs/vietnamese-guide.md`

```md
# Hướng dẫn tiếng Việt

## Đây là repo gì?

`cursor-agent-starter-kit` là một template giúp bạn dùng Cursor hiệu quả hơn khi xây dựng AI Agent hoặc dự án phần mềm.

Repo này cung cấp:

- rules cho Cursor
- file `AGENTS.md`
- agent role có thể tái sử dụng
- workflow làm việc
- skill cho các tác vụ lặp lại
- memory lưu quyết định và preference
- task tracking đơn giản

## Cách dùng nhanh

Mở repo bằng Cursor, sau đó hỏi:

```txt
Read AGENTS.md and summarize how this project is organized.
```

Khi muốn làm feature mới:

```txt
Use workflows/plan.md to plan the feature first.
Then use agents/implementer.md to implement it with minimal changes.
```

Khi muốn review code:

```txt
Use agents/code-reviewer.md and .cursor/skills/code-review/SKILL.md to review the latest changes.
```

## Vì sao repo này hữu ích?

AI coding agents thường mắc lỗi:
- đoán sai yêu cầu
- sửa quá nhiều file
- over-engineer
- bỏ qua test
- không nhớ quyết định cũ

Repo này giúp Cursor làm việc có quy trình hơn.
```

---

## 15. `README.md`

Create a polished GitHub README.

It must include:

```md
# Cursor Agent Starter Kit

A Cursor-first workspace template for building AI agents with rules, skills, memory, workflows, and safer coding behavior.

## Why this exists

AI coding agents often fail in predictable ways:

- they assume too much
- they overcomplicate code
- they edit unrelated files
- they skip verification
- they forget project preferences

This starter kit gives Cursor a structured workspace so your AI assistant can plan, implement, review, debug, reflect, and improve over time.

## Features

- Cursor project rules
- `AGENTS.md` for coding agents
- reusable agent roles
- reusable Cursor skills
- repeatable workflows
- project memory
- task tracking
- safety rules
- templates
- examples
- Vietnamese guide

## Quick Start

```bash
git clone https://github.com/yourname/cursor-agent-starter-kit
cd cursor-agent-starter-kit
npm install
npm run init
```

Open the folder in Cursor.

Then ask:

```txt
Read AGENTS.md and workflows/onboard.md.
Summarize this project and recommend the next step.
```

## Project Structure

```txt
.cursor/rules/      Persistent Cursor rules
.cursor/skills/     Reusable task skills
agents/             Agent role definitions
workflows/          Repeatable workflows
memory/             Project memory
tasks/              Simple task tracking
templates/          Copyable templates
examples/           Example agent ideas
docs/               Documentation
```

## Example Prompts

### Plan a feature

```txt
Use workflows/plan.md to plan a new Study Assistant Agent.
Do not edit files yet.
```

### Implement a feature

```txt
Use agents/implementer.md to implement the approved plan.
Follow .cursor/rules/03-surgical-changes.mdc.
```

### Review code

```txt
Use agents/code-reviewer.md and .cursor/skills/code-review/SKILL.md to review the latest changes.
```

### Debug a bug

```txt
Use agents/bug-fixer.md and .cursor/skills/debug-bug/SKILL.md to find and fix this bug with minimal changes.
```

### Reflect after a session

```txt
Use workflows/reflect.md to extract reusable learnings and update memory files.
```

## Roadmap

- [x] Cursor rules
- [x] AGENTS.md
- [x] agent roles
- [x] workflows
- [x] skills
- [x] memory
- [ ] Next.js AI agent example
- [ ] MCP setup guide
- [ ] CLI generator for new agents
- [ ] docs website

## Philosophy

This repo is designed around a simple idea:

> Better context creates better AI coding behavior.

Instead of asking Cursor to guess how your project works, this starter kit gives it:
- clear rules
- clear roles
- clear workflows
- clear memory
- clear success criteria

## License

MIT
```

---

## 16. `package.json`

Create a minimal `package.json`.

```json
{
  "name": "cursor-agent-starter-kit",
  "version": "0.1.0",
  "description": "A Cursor-first workspace template for building AI agents with rules, skills, memory, workflows, and safer coding behavior.",
  "type": "module",
  "scripts": {
    "init": "node scripts/init-workspace.mjs",
    "check": "node scripts/init-workspace.mjs --check"
  },
  "keywords": [
    "cursor",
    "ai-agent",
    "agents",
    "cursor-rules",
    "agentic-coding",
    "starter-kit",
    "ai-coding"
  ],
  "license": "MIT"
}
```

---

## 17. `scripts/init-workspace.mjs`

Create a simple script.

Requirements:
- If run normally, print welcome message and check required folders exist.
- If folders are missing, create them.
- If run with `--check`, only report missing files/folders.
- Do not install dependencies.
- Do not modify user secrets.

Suggested behavior:

```js
import fs from "node:fs";
import path from "node:path";

const requiredPaths = [
  "AGENTS.md",
  "CURSOR.md",
  ".cursor/rules",
  ".cursor/skills",
  "agents",
  "workflows",
  "memory",
  "tasks",
  "templates",
  "examples",
  "docs"
];

const checkOnly = process.argv.includes("--check");

let missing = [];

for (const item of requiredPaths) {
  if (!fs.existsSync(item)) {
    missing.push(item);
  }
}

if (checkOnly) {
  if (missing.length === 0) {
    console.log("Workspace check passed.");
    process.exit(0);
  }

  console.log("Missing paths:");
  for (const item of missing) {
    console.log(`- ${item}`);
  }
  process.exit(1);
}

for (const item of missing) {
  const ext = path.extname(item);
  if (ext) {
    fs.mkdirSync(path.dirname(item), { recursive: true });
    fs.writeFileSync(item, "");
  } else {
    fs.mkdirSync(item, { recursive: true });
  }
}

console.log("Cursor Agent Starter Kit workspace initialized.");
console.log("");
console.log("Open this folder in Cursor and ask:");
console.log("");
console.log("Read AGENTS.md and workflows/onboard.md. Summarize this project.");
```

---

## 18. `.gitignore`

Create:

```gitignore
node_modules
.env
.env.*
!.env.example
.DS_Store
dist
build
coverage
.cache
```

---

## 19. `LICENSE`

Use MIT License.

If the owner name is unknown, use:

```txt
MIT License

Copyright (c) 2026 Cursor Agent Starter Kit

Permission is hereby granted, free of charge, to any person obtaining a copy...
```

Use the full MIT license text.

---

## 20. Final Quality Checklist

After creating files, check:

```txt
- All required folders exist
- All required files exist
- README is polished
- AGENTS.md is clear
- CURSOR.md explains usage
- Cursor rules have valid frontmatter
- Skills have useful steps
- Agents have purpose/process/boundaries/output format
- Workflows have steps/output format
- Vietnamese guide exists
- package.json is valid JSON
- init script runs
```

Run or suggest:

```bash
npm run check
```

---

## 21. Important Constraints

Do not:
- create a full Next.js app yet
- add unnecessary dependencies
- make this complex
- create fake badges
- add broken links
- include private tokens
- use placeholder claims like "production-ready" unless justified

Do:
- make this repo useful as a public GitHub project
- keep files readable
- keep the first version focused
- make examples copyable
- make the README attractive
- make it easy for Cursor to follow

---

## 22. Final Response Required From Cursor

After implementation, respond with:

```txt
Implemented v0.1 scaffold for cursor-agent-starter-kit.

Created:
- list major folders/files

How to verify:
- npm run check

Recommended next steps:
1. Initialize git repository
2. Review README
3. Open in Cursor and test the onboarding prompt
4. Add the first real AI agent app example
```

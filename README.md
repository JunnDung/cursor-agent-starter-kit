# Cursor Agent Starter Kit

A Cursor-first workspace template for building AI agents with rules, skills, memory, workflows, and safer coding behavior.

> **Language:** [English](README.md) · [Tiếng Việt](docs/vietnamese-guide.md)

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
- **two-layer skill structure** (SKILL.md + GUIDE.md)
- **thin-shell routing** for fast skill reads
- **skill validation** script

## Quick Start

```bash
git clone https://github.com/yourname/cursor-agent-starter-kit
cd cursor-agent-starter-kit
npm install
npm run init
npm run validate   # check skill structure
```

Open the folder in Cursor.

Then ask:

```txt
Read AGENTS.md and workflows/onboard.md.
Summarize this project and recommend the next step.
```

## Project Structure

```txt
.cursor/
  rules/              Cursor rules (11 rules)
    routing.yaml     Thin-shell routing index
  skills/             Skills for task-specific procedures
  agents/             Agent role definitions (6 agents)
  workflows/          Repeatable workflows (9 workflows)
  memory/             Project memory (4 files)
  tasks/              Task tracking (backlog, active, done)
  templates/          Copyable templates (4 templates)
  examples/           Example agent ideas (3 examples)
  docs/               Documentation (Vietnamese guide)
scripts/
  init-workspace.mjs # Workspace setup
  validate-skills.mjs # Skill & rule structure validator
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

### Evaluate quality

```txt
Use workflows/evaluator-optimizer.md to evaluate and refine before claiming done.
```

### Get approval before major changes

```txt
Use .cursor/rules/09-approval-workflow.mdc before implementing significant changes.
```

## Roadmap

### Completed

- [x] Cursor rules
- [x] AGENTS.md
- [x] agent roles
- [x] workflows
- [x] skills
- [x] memory
- [x] two-layer skill structure (SKILL.md + GUIDE.md)
- [x] thin-shell routing
- [x] skill validation script

### In Progress

- [ ] MCP setup guide (`docs/mcp-setup.md`)
- [ ] Skill validation CI check
- [ ] After-Action Review skill
- [ ] Interactive skill scaffolder (`generate-skill.mjs`)

### Planned

- [ ] GitHub issue triage agent
- [ ] Multi-agent skeleton (per-agent CLAUDE.md + MEMORY.md)
- [ ] CLI generator for new agents
- [ ] Troubleshooting guide (`docs/troubleshooting.md`)
- [ ] CLI reference (`docs/cli-reference.md`)

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

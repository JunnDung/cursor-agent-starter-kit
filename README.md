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
- `CLAUDE.md` for cross-tool compatibility (Cursor + Claude Code + Codex)
- reusable agent roles
- reusable Cursor skills
- **After-Action Review (AAR) skill** for session reflection
- repeatable workflows
- project memory
- task tracking
- safety rules
- templates
- examples
- Vietnamese guide
- **two-layer skill structure** (SKILL.md + GUIDE.md)
- **thin-shell routing** for fast skill reads
- **skill validation** script + **GitHub Actions CI**
- **MCP setup guide** for Cursor IDE and CLI
- **interactive skill scaffolder** (`npm run generate:skill`)
- **troubleshooting guide** + **CLI reference**

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
  skills/             Skills for task-specific procedures (7 skills)
.github/
  workflows/          GitHub Actions CI pipelines
agents/               Agent role definitions (6 agents)
workflows/            Repeatable workflows (9 workflows)
memory/               Project memory (4 files)
tasks/                Task tracking (backlog, active, done)
templates/            Copyable templates (4 templates)
examples/             Example agent ideas (3 examples)
docs/                 Documentation (MCP setup, troubleshooting, CLI ref, Vietnamese guide)
scripts/
  init-workspace.mjs   # Workspace setup
  validate-skills.mjs  # Skill & rule structure validator
  generate-skill.mjs   # Interactive skill scaffolder
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
Use .cursor/skills/aar/SKILL.md to run an after-action review of this session.
```

### Generate a new skill

```txt
Run npm run generate:skill to scaffold a new skill from the template.
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
- [x] CLAUDE.md (cross-tool compatibility)
- [x] agent roles
- [x] workflows
- [x] skills
- [x] memory
- [x] two-layer skill structure (SKILL.md + GUIDE.md)
- [x] thin-shell routing
- [x] skill validation script
- [x] MCP setup guide
- [x] GitHub Actions CI validation
- [x] After-Action Review skill
- [x] Interactive skill scaffolder
- [x] Troubleshooting guide
- [x] CLI reference

### In Progress

- [ ] crag compiler integration (governance.md cross-tool sync)
- [ ] agentmemory integration guide
- [ ] Cursor hooks documentation
- [ ] Cursor plugin template

### Planned

- [ ] GitHub issue triage agent
- [ ] Multi-agent skeleton (per-agent CLAUDE.md + MEMORY.md)
- [ ] CLI generator for new agents
- [ ] Docs website (GitHub Pages)

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

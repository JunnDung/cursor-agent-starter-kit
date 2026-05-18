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

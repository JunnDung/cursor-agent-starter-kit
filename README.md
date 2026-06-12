# Cursor Agent Starter Kit

> **Copy into any project. Zero config. AI coding agent works immediately.**

A Cursor-first workspace template that gives your AI assistant rules, skills, workflows, memory, and safer behavior — out of the box.

**Language:** [English](README.md) · [Tiếng Việt](docs/vietnamese-guide.md)

---

## Copy & Go (30 seconds)

```bash
# Option 1: Clone as a new project
git clone https://github.com/yourname/cursor-agent-starter-kit my-project
cd my-project
npm install

# Option 2: Copy into existing project
git clone https://github.com/yourname/cursor-agent-starter-kit /tmp/starter
cp -r /tmp/starter/.cursor /tmp/starter/.github /tmp/starter/agents /tmp/starter/workflows /tmp/starter/memory /tmp/starter/docs /tmp/starter/scripts /tmp/starter/templates /tmp/starter/examples /tmp/starter/AGENTS.md /tmp/starter/CLAUDE.md .
npm install
```

Open in Cursor and ask:

```txt
Read AGENTS.md and workflows/onboard.md.
Summarize this project and recommend the next step.
```

Done. The AI assistant understands your workspace immediately.

---

## What You Get

| Component | Files | Purpose |
|---|---|---|
| **Rules** | `.cursor/rules/*.mdc` (11 files) | Persistent behavior instructions |
| **Skills** | `.cursor/skills/*/SKILL.md` (7 skills) | Reusable task procedures |
| **Agents** | `agents/*.md` (6 roles) | Reusable role definitions |
| **Workflows** | `workflows/*.md` (9 workflows) | Repeatable procedures |
| **Memory** | `memory/*.md` (4 files) | Decisions, preferences, learnings |
| **Docs** | `docs/*.md` (9 files) | Setup guides & references |
| **Scripts** | `scripts/*.mjs` (4 files) | Automation & scaffolding |
| **CI** | `.github/workflows/*.yml` (3 workflows) | GitHub Actions pipelines |

---

## Core Features

### Rules (Always-On Behavior)
- **00-core** — core expectations and success criteria
- **01-karpathy-behavior** — reduce common AI mistakes
- **03-surgical-changes** — minimal edit discipline
- **05-security** — secrets, shell safety, dependencies

### Skills (7 Reusable Procedures)
| Skill | Use when |
|---|---|
| `aar` | Reflect after a session |
| `code-review` | Review code changes |
| `debug-bug` | Find and fix bugs minimally |
| `create-agent` | Create new agent roles |
| `create-tool` | Add MCP tools |
| `refactor-safely` | Safe refactoring |
| `write-tests` | Write regression tests |

Each skill has two layers:
- **SKILL.md** — purpose, triggers, quick steps (< 120 lines)
- **GUIDE.md** — deep patterns, examples, edge cases (on demand)

### Zero-Config Tools
```bash
npm run init          # Initialize workspace
npm run validate      # Check skill & rule structure
npm run generate:skill # Scaffold a new skill (interactive)
npm run generate:agent # Scaffold a new agent (interactive)
npm run crag:analyze  # Generate governance.md (if crag installed)
npm run crag:compile  # Compile rules to all agent formats
```

---

## Project Structure

```
.cursor/
  rules/              11 .mdc files (always-on + task-specific)
  rules/routing.yaml  Thin-shell skill index
  skills/             7 skills (SKILL.md + GUIDE.md each)
  hooks/              5 shell hooks (session, pre-tool, post-tool, stop)
  hooks.json          Hook configuration
  mcp.json.example    Example MCP server config
.cursor-plugin/
  plugin.json          Cursor plugin manifest
.github/
  workflows/
    validate.yml     # Skill/rule validation CI
    agent-workflow.yml # Agent workspace CI
    .github/         # Copied into user projects
agents/               6 agent role definitions
workflows/            9 workflow procedures (plan, implement, review, debug, reflect...)
memory/               4 memory files (project, decisions, preferences, learnings)
tasks/                Backlog, active, done tracking
templates/            4 copyable templates
examples/              3 example agent ideas
docs/
  vietnamese-guide.md  Vietnamese language guide
  mcp-setup.md        MCP server configuration guide
  agentmemory-setup.md Persistent cross-session memory setup
  hooks-guide.md       Cursor hooks system guide
  crag-integration.md  Cross-tool rule compiler guide
  troubleshooting.md    Common issues and solutions
  cli-reference.md     All CLI commands and prompts
scripts/
  init-workspace.mjs  Workspace initialization
  validate-skills.mjs Skill & rule structure validator
  generate-skill.mjs Interactive skill scaffolder
  generate-agent.mjs  Interactive agent scaffolder
AGENTS.md             Main instruction file (Cursor + Codex)
CLAUDE.md             Cross-tool bridge (Claude Code)
```

---

## How It Works

### Copy Into Any Project

1. Copy these folders/files into your project root:
   ```
   .cursor/  agents/  workflows/  memory/  scripts/
   AGENTS.md  CLAUDE.md
   ```

2. Run `npm install` (or just `npm run init` — no deps needed)

3. Open in Cursor. Done.

### Agent Workflow

```
User prompt
    │
    ▼
Read AGENTS.md + relevant rules
    │
    ▼
Pick skill from routing.yaml
    │
    ▼
Read SKILL.md (fast path)
    │
    ├─ Simple task? → Execute
    │
    └─ Complex task? → Read GUIDE.md → Execute
    │
    ▼
Reflect (workflows/reflect.md)
    │
    ▼
Update memory files if needed
```

### Skill Trigger Flow

Skills activate when the prompt matches trigger phrases in `routing.yaml`:

```
"debug" or "find the bug" → debug-bug/
"review code" → code-review/
"reflect" or "after-action review" → aar/
```

---

## Quick Reference

### Common Prompts

```txt
# Onboard
Read AGENTS.md and workflows/onboard.md. Summarize this project.

# Plan a feature
Use workflows/plan.md to plan a new [feature].
Do not edit files yet.

# Implement
Use agents/implementer.md to implement the approved plan.
Follow .cursor/rules/03-surgical-changes.mdc.

# Review
Use agents/code-reviewer.md and .cursor/skills/code-review/SKILL.md to review.

# Debug
Use agents/bug-fixer.md and .cursor/skills/debug-bug/SKILL.md to find and fix.

# Reflect
Use .cursor/skills/aar/SKILL.md for after-action review.

# Create skill
npm run generate:skill

# Create agent
npm run generate:agent

# Validate
npm run validate
```

### npm Scripts

| Command | What it does |
|---|---|
| `npm run init` | Initialize workspace directories |
| `npm run check` | Check workspace structure |
| `npm run validate` | Validate skill & rule structure |
| `npm run generate:skill` | Scaffold a new skill (interactive) |
| `npm run generate:agent` | Scaffold a new agent (interactive) |
| `npm run crag:analyze` | Generate governance.md |
| `npm run crag:compile` | Compile to all agent formats |

---

## Extending the Kit

### Add a New Skill

```bash
npm run generate:skill
# Follow prompts → creates SKILL.md + GUIDE.md + routing entry
```

### Add a New Agent

```bash
npm run generate:agent
# Follow prompts → creates agents/<name>.md + optional skill
```

### Add Persistent Memory

```bash
# Install agentmemory (see docs/agentmemory-setup.md)
npx @agentmemory/agentmemory
# Then add .cursor/mcp.json to your project
```

### Add Cross-Tool Rules Sync

```bash
# Install crag (see docs/crag-integration.md)
npx @whitehatd/crag analyze
npx @whitehatd/crag compile --target all
```

### Configure Hooks

Edit `.cursor/hooks.json` and add scripts to `.cursor/hooks/`.
See `docs/hooks-guide.md` for patterns.

---

## Roadmap

### Completed
- [x] Cursor rules (11 files)
- [x] AGENTS.md + CLAUDE.md (cross-tool)
- [x] Skills (7 skills, two-layer structure)
- [x] Agents (6 roles)
- [x] Workflows (9 workflows)
- [x] Memory (4 files)
- [x] GitHub Actions CI (validation + linting + audit)
- [x] MCP setup guide
- [x] After-Action Review skill
- [x] Cursor hooks system
- [x] agentmemory integration guide
- [x] crag integration guide
- [x] Interactive skill & agent generators
- [x] Troubleshooting guide + CLI reference
- [x] Cursor plugin template

### In Progress
- [ ] GitHub issue triage agent
- [ ] Multi-agent skeleton (per-agent CLAUDE.md + MEMORY.md)

### Planned
- [ ] Docs website (GitHub Pages)
- [ ] CLI generator for new agents
- [ ] Cross-tool template installer

---

## Philosophy

> **Better context creates better AI coding behavior.**

AI coding agents fail predictably:
- they assume too much
- they overcomplicate code
- they edit unrelated files
- they skip verification
- they forget project preferences

This starter kit gives Cursor a structured workspace so it knows:
- what rules to follow
- what skills to use
- what workflows to follow
- what decisions to remember
- what success looks like

---

## License

MIT

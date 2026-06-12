# Using this repo with Cursor

This repository is a Cursor-first AI agent starter kit. It gives Cursor structured rules, skills, workflows, memory, and safer coding behavior.

## Copy Into Any Project

Copy these into your project root:

```
.cursor/  agents/  workflows/  memory/
scripts/  templates/  examples/
AGENTS.md  CLAUDE.md
```

Run `npm install` (optional — no runtime deps needed).

Open in Cursor. Done.

## What Cursor Loads Automatically

- `AGENTS.md` — main instruction file
- `CLAUDE.md` — cross-tool bridge (also read by Claude Code)
- `.cursor/rules/*.mdc` — 11 project rules
- `.cursor/skills/*/SKILL.md` — 7 skills
- `.cursor/hooks.json` — hook configuration
- `.cursor/hooks/` — hook scripts

## Recommended First Prompt

```txt
Read AGENTS.md and workflows/onboard.md.
Summarize the workspace and recommend the next step.
Before editing anything, verify you understand:
1. project purpose and structure
2. available rules and their triggers
3. available skills and their use cases
4. available workflows and when to use each
5. memory files and what they store
```

## Recommended Implementation Prompt

```txt
Use workflows/plan.md before implementing.
Use agents/implementer.md when coding.
Use .cursor/rules/03-surgical-changes.mdc to keep edits focused.
```

## Rules

`.cursor/rules/` — 11 .mdc files.

Always-on (loaded for every task):
- `00-core.mdc` — core expectations and success criteria
- `01-karpathy-behavior.mdc` — reduce common AI mistakes
- `03-surgical-changes.mdc` — minimal edit discipline
- `05-security.mdc` — secrets, shell safety, dependencies

Task-specific (loaded by context):
- `02-agent-workflow.mdc` — when to use which workflow
- `04-architecture.mdc` — architecture conventions
- `06-testing.mdc` — testing and verification
- `07-docs.mdc` — documentation standards
- `08-memory.mdc` — memory file updates
- `09-approval-workflow.mdc` — approval gates
- `10-context-optimization.mdc` — token efficiency
- `11-rule-testing.mdc` — rule validation

## Skills

`.cursor/skills/` — 7 skills with routing.yaml index.

Two-layer pattern:
- `SKILL.md` — purpose, when-to-use, quick steps (< 120 lines)
- `GUIDE.md` — deep patterns, examples, edge cases (on demand)

| Skill | Trigger phrases |
|---|---|
| `aar` | "reflect", "after-action review", "what did we learn" |
| `code-review` | "review code", "check my changes" |
| `debug-bug` | "debug", "find the bug", "fix this bug" |
| `create-agent` | "create agent", "new agent role" |
| `create-tool` | "create tool", "add MCP tool" |
| `refactor-safely` | "refactor", "improve structure" |
| `write-tests` | "write tests", "add tests" |

## Hooks

`.cursor/hooks/` — shell scripts for lifecycle events.

| Hook | When | Purpose |
|---|---|---|
| `session-start.sh` | Session begins | Log branch, load context |
| `session-end.sh` | Session ends | Log changes |
| `pre-tool-validate.sh` | Before shell tool | Block dangerous commands |
| `post-tool-audit.sh` | After any tool | Audit tool usage |
| `stop-session.sh` | Task completes | Remind about AAR |

## Scripts

| Script | What it does |
|---|---|
| `init-workspace.mjs` | Create missing directories |
| `validate-skills.mjs` | Check skill & rule structure |
| `generate-skill.mjs` | Scaffold a new skill (interactive) |
| `generate-agent.mjs` | Scaffold a new agent (interactive) |

## Docs

| File | What it covers |
|---|---|
| `docs/vietnamese-guide.md` | Vietnamese language guide |
| `docs/mcp-setup.md` | MCP server configuration |
| `docs/agentmemory-setup.md` | Persistent cross-session memory |
| `docs/hooks-guide.md` | Cursor hooks system |
| `docs/crag-integration.md` | Cross-tool rule compiler |
| `docs/troubleshooting.md` | Common issues and fixes |
| `docs/cli-reference.md` | All CLI commands and prompts |

## MCP

Example MCP config: `.cursor/mcp.json.example`
See `docs/mcp-setup.md` for full guide.

## CLI Reference

```bash
npm run init          # Initialize workspace
npm run check         # Check workspace structure
npm run validate      # Validate skill & rule structure
npm run generate:skill  # Scaffold a new skill
npm run generate:agent   # Scaffold a new agent
```

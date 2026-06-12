# Learnings

Use this file to store repeated lessons from sessions.

## Current learnings

- AI coding agents perform better with explicit rules.
- Always-on rules should be short and broadly useful.
- Optional rules should be task-specific.
- Skills should be invoked when the task matches their purpose.

## Research findings (2026-06-13)

After surveying top GitHub repos, these patterns are proven in production:

### Thin-shell routing (skill-based-architecture, 246 stars)
SKILL.md should stay under 120 lines. Extended context goes into `GUIDE.md`.
Load the extended guide lazily, only when the skill triggers deeper needs.

### Two-layer skill structure
Layer 1 (Always Read): purpose, when-to-use, quick steps — under 100 lines.
Layer 2 (On Demand): deeper patterns, examples, edge cases — in GUIDE.md.

### Session Discipline + AAR (After-Action Review)
Re-read SKILL.md on every new task. After non-trivial work,
summarize what went wrong, what worked, and update `memory/learnings.md`.
Use `workflows/reflect.md` for structured AAR. Use `.cursor/skills/aar/SKILL.md`
for quick-capture mode.

### Cross-harness compatibility
Skills that work with Cursor, Claude Code, Windsurf, Cline, and Codex
are more valuable. Use generic frontmatter and avoid Cursor-only assumptions.
Use `AGENTS.md` as canonical source of truth. Also maintain `CLAUDE.md`
for Claude Code. This project now includes both for maximum compatibility.
Cursor also reads `CLAUDE.md` — see context7 docs (2026-06-13).

### Skill validation
Automated checks for SKILL.md structure catch drift early.
Run `npm run validate` to check all skills.
GitHub Actions CI validates on every push/PR — see `.github/workflows/validate.yml`.

### AI context linting
Use `ai-context-linter` (MrDwarf7) for GitHub Actions CI.
Use `cc-audit` (sisyphusse1-ops) for 12-rule baseline compliance.
Use `agent-guardrails` (jzOcb) for pre-commit hooks blocking bypass patterns.

### crag compiler for cross-tool sync
`crag` (whitehatd) analyzes repo and generates governance.md that compiles
to 13+ target formats: AGENTS.md, .cursor/rules, .github/copilot-instructions.md,
GEMINI.md, CLAUDE.md, .clinerules, .windsurf/rules, and GitHub Actions.

### MCP server ecosystem
Smithery.ai distributes MCP servers via npm. Configure via `.cursor/mcp.json`.
StackMCP.dev and mcpservers.org catalog available MCP servers.
Cursor CLI mirrors editor MCP config via `cursor agent mcp` commands.

### Agent memory (agentmemory by rohitg00)
Persistent memory engine for Claude Code, Cursor, Gemini CLI, Codex CLI.
Built on iii engine with SQLite. BM25 + vector + graph hybrid search.
12 lifecycle hooks. Privacy filter strips API keys before storage.
MCP interface + REST API. Real-time viewer at port 3113.
Works cross-agent — one server, memories shared.

### Cursor plugin directory structure
Standard Cursor plugin: `.cursor-plugin/plugin.json`, `rules/`, `skills/`,
`agents/`, `commands/`, `hooks/`, `mcp.json`, `assets/`, `scripts/`.
Hooks config at `.cursor/hooks.json` with preToolUse/postToolUse hooks.

### Agent Skills specification (agentskills.io)
Skills follow a standard spec with YAML frontmatter on SKILL.md.
Name: lowercase, max 64 chars. Description: max 1024 chars.
Keep SKILL.md under 500 lines. Use flat subdirs (scripts/, references/, assets/).
Progressive loading: metadata at startup, instructions on activation, resources on demand.

### Cross-tool rule migration
cursor2claude syncs .cursor/rules to CLAUDE.md automatically.
RuleSync helps migrate between CLAUDE.md, .cursorrules, copilot-instructions.md.
Best practice: write in AGENTS.md format (richest), generate others.

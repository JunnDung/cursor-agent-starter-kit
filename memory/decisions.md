# Architecture Decisions

## Decision 1: Use Markdown-first structure

The v0.1 project is Markdown-first because the main value is rules, workflows, skills, memory, and repeatable agent behavior.

## Decision 2: Use `.cursor/rules`

Cursor project rules live in `.cursor/rules` and are version-controlled with the repository.

## Decision 3: Use `AGENTS.md`

`AGENTS.md` acts as the main instruction file for AI coding agents.

## Decision 4: Use `.cursor/skills`

Skills are used for reusable task-specific procedures.

## Decision 5: Two-layer skill structure (v0.2, 2026-05-18)

Adopted from `skill-based-architecture` (246 stars on GitHub).

SKILL.md contains only:
- Purpose (1 sentence)
- When to use (trigger phrases)
- Quick steps (5-10 lines)
- Extended Guide reference

GUIDE.md contains:
- Deep patterns and examples
- Edge case handling
- Checklists and references

This keeps SKILL.md under 120 lines, enabling fast reads.

## Decision 6: Thin-shell routing

routing.yaml provides a lightweight index into extended skill content.
No duplicated content across files. Each skill points to its extended guide.

## Decision 7: Skill validation

Automated validation via `scripts/validate-skills.mjs` ensures:
- All SKILL.md files have Purpose, When-to-use, Steps, Output
- All .mdc rule files have valid frontmatter
- No skill exceeds 120 lines (triggers a warning)

Run: `npm run validate`

## Decision 8: Dual AGENTS.md + CLAUDE.md (v0.3, 2026-06-13)

Claude Code reads `CLAUDE.md` as the canonical instruction file. Cursor reads both `AGENTS.md` and `CLAUDE.md`. To maximize cross-tool compatibility:

- Keep `AGENTS.md` as the primary source (most Cursor-specific, covers rules/skills/workflows)
- Also maintain `CLAUDE.md` as a cross-tool bridge
- Use generic frontmatter in skills to avoid Cursor-only assumptions
- Cursor plugin directory structure: `.cursor-plugin/plugin.json`, `rules/`, `skills/`, `agents/`, `commands/`, `hooks/`, `mcp.json`

## Decision 9: MCP setup documentation (v0.3, 2026-06-13)

Document MCP server configuration in `docs/mcp-setup.md`:
- `.cursor/mcp.json` for project-level MCP servers
- `~/.cursor/mcp.json` for global MCP servers
- Smithery.ai integration for MCP server distribution
- Cursor CLI MCP commands: `cursor agent mcp list`, `list-tools`, `add`

## Decision 10: GitHub Actions CI validation (v0.3, 2026-06-13)

Automated CI pipeline at `.github/workflows/validate.yml` runs:
- `npm run validate` — skill and rule structure
- `MrDwarf7/ai-context-linter` — security + anti-pattern checks
- `sisyphusse1-ops/cc-audit` — 12-rule baseline compliance

## Decision 11: AAR (After-Action Review) skill (v0.3, 2026-06-13)

Added `.cursor/skills/aar/` with SKILL.md + GUIDE.md for structured session reflection.
Targets `memory/learnings.md`, `memory/decisions.md`, `memory/preferences.md`.
Includes skill health check and self-maintenance signals.

## Decision 12: Interactive skill scaffolder (v0.3, 2026-06-13)

Added `scripts/generate-skill.mjs` for interactive CLI skill creation.
- Prompts for name, purpose, trigger phrases
- Creates SKILL.md + GUIDE.md from template
- Auto-updates routing.yaml

## Decision 13: Troubleshooting and CLI reference docs (v0.3, 2026-06-13)

Added `docs/troubleshooting.md` for common issues and solutions.
Added `docs/cli-reference.md` for complete npm script and agent prompt reference.

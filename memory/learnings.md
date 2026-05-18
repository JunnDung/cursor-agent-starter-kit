# Learnings

Use this file to store repeated lessons from sessions.

## Current learnings

- AI coding agents perform better with explicit rules.
- Always-on rules should be short and broadly useful.
- Optional rules should be task-specific.
- Skills should be invoked when the task matches their purpose.

## Research findings (2026-05-18)

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

### Cross-harness compatibility
Skills that work with Cursor, Claude Code, Windsurf, Cline, and Codex
are more valuable. Use generic frontmatter and avoid Cursor-only assumptions.

### Skill validation
Automated checks for SKILL.md structure catch drift early.
Run `npm run validate` to check all skills.

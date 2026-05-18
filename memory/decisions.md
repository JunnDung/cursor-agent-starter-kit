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

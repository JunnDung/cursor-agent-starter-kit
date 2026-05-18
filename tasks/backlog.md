# Backlog

Ordered by priority (highest first):

## High Priority (practical tooling)

- [ ] Add `docs/mcp-setup.md`
  - .cursor/mcp.json configuration
  - TypeScript SDK v2 quickstart
  - Zod schema validation for tools
  - Inspector debugging guide
  - Smithery.ai distribution setup
- [ ] Add skill validation CI check
  - Run `npm run validate` in pre-commit / GitHub Actions
  - fail-fast on missing frontmatter or sections
- [ ] Add After-Action Review skill (`.cursor/skills/aar/SKILL.md`)
  - Session Discipline + AAR workflow
  - Prompt to update `memory/learnings.md` after non-trivial work
  - Line-count maintenance signals
- [ ] Add `scripts/generate-skill.mjs`
  - Interactive CLI to scaffold new skill from template
  - Auto-register in `routing.yaml`
  - Auto-create GUIDE.md stub

## Medium Priority (workflow improvements)

- [ ] Add GitHub issue triage agent
  - Parse issue body, classify severity, suggest assignee
  - Based on CLAUDE.md + AGENTS.md context
- [ ] Add multi-agent skeleton (per-agent CLAUDE.md + MEMORY.md)
  - Based on teamfuse pattern
  - 3 starter roles: implementer, reviewer, debugger
- [ ] Add CLI generator for new agents
  - `npm run new:agent <name>` scaffold
  - Auto-register in AGENTS.md

## Lower Priority (docs & polish)

- [ ] Add `docs/troubleshooting.md`
  - Common Cursor issues and fixes
  - Skill not triggering? Check routing.yaml
  - Rule not loading? Check frontmatter
- [ ] Add `docs/cli-reference.md`
  - Complete reference for all npm scripts
  - All available agent and workflow prompts
- [ ] Add docs website
  - Generated from skill definitions
  - Hosted on GitHub Pages

# Backlog

Ordered by priority (highest first):

## High Priority (practical tooling)

- [x] Add `docs/mcp-setup.md`
  - .cursor/mcp.json configuration
  - Smithery.ai distribution setup
  - Cursor CLI MCP commands
- [x] Add skill validation CI check
  - Run `npm run validate` in GitHub Actions
  - ai-context-linter for security + anti-patterns
  - cc-audit for 12-rule baseline
- [x] Add After-Action Review skill (`.cursor/skills/aar/SKILL.md`)
  - Session Discipline + AAR workflow
  - Prompt to update `memory/learnings.md` after non-trivial work
  - Skill health check and self-maintenance signals
- [x] Add `scripts/generate-skill.mjs`
  - Interactive CLI to scaffold new skill from template
  - Auto-register in `routing.yaml`
  - Auto-create GUIDE.md stub
- [ ] Add crag compiler integration
  - Compile `governance.md` to AGENTS.md + .cursor/rules + CLAUDE.md
  - Prevent rule drift across tools
  - Auto-sync on commit
- [ ] Add agentmemory integration guide
  - Connect agentmemory MCP to `.cursor/mcp.json`
  - Document BM25 + vector + graph hybrid search
  - Team memory and privacy filter setup

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
- [ ] Add Cursor hooks documentation
  - `.cursor/hooks.json` configuration
  - Pre-tool use and post-tool use patterns
  - Pre-commit hook for AI context linting

## Lower Priority (docs & polish)

- [x] Add `docs/troubleshooting.md`
  - Common Cursor issues and fixes
  - Skill not triggering? Check routing.yaml
  - Rule not loading? Check frontmatter
- [x] Add `docs/cli-reference.md`
  - Complete reference for all npm scripts
  - All available agent and workflow prompts
- [ ] Add docs website
  - Generated from skill definitions
  - Hosted on GitHub Pages
- [ ] Add Cursor plugin template
  - `.cursor-plugin/plugin.json` scaffold
  - Full plugin structure (rules, skills, agents, commands, hooks, mcp.json)
  - Publish to GitHub as template repo

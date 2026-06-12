# Done

Completed tasks will be moved here.

## v0.1 (2026-05-18)

- [x] Initial scaffold: rules, skills, agents, workflows, memory, tasks, templates, examples, docs
- [x] AGENTS.md and CURSOR.md
- [x] 9 Cursor rules in .cursor/rules/
- [x] 6 skills in .cursor/skills/
- [x] 6 agent roles in agents/
- [x] 7 workflows in workflows/
- [x] 4 memory files in memory/
- [x] 3 task files in tasks/
- [x] 4 templates in templates/
- [x] 3 examples in examples/
- [x] 4 docs including Vietnamese guide
- [x] init-workspace.mjs and validate-skills.mjs scripts

## v0.2 (2026-05-18)

- [x] Two-layer skill structure (SKILL.md + GUIDE.md)
- [x] Thin-shell routing (routing.yaml)
- [x] Skill validation script (validate-skills.mjs)
- [x] Extended guides for create-agent, code-review, debug-bug, refactor-safely, write-tests, create-tool
- [x] Updated memory with research findings
- [x] Updated backlog with prioritized roadmap

## v0.3 (2026-06-13)

- [x] MCP setup guide (`docs/mcp-setup.md`)
  - `.cursor/mcp.json` configuration with Smithery.ai
  - Cursor CLI MCP commands reference
- [x] GitHub Actions CI validation (`.github/workflows/validate.yml`)
  - Skill & rule structure validation
  - AI context linting (MrDwarf7/ai-context-linter)
  - 12-rule baseline audit (sisyphusse1-ops/cc-audit)
- [x] After-Action Review skill (`.cursor/skills/aar/SKILL.md` + GUIDE.md)
  - Structured session reflection workflow
  - Skill health check and self-maintenance signals
  - Quick-capture mode for trivial sessions
- [x] Interactive skill scaffolder (`scripts/generate-skill.mjs`)
  - Non-interactive mode via env vars
  - Auto-updates routing.yaml
- [x] Troubleshooting guide (`docs/troubleshooting.md`)
- [x] CLI reference (`docs/cli-reference.md`)
- [x] Cross-tool compatibility: added `CLAUDE.md`
- [x] Updated research findings with 2026-06-13 landscape
  - agentmemory, crag compiler, agent-guardrails
  - Agent Skills specification (agentskills.io)
  - Cursor plugin directory structure
- [x] Updated package.json with `generate:skill` script
- [x] Updated routing.yaml with AAR skill entry

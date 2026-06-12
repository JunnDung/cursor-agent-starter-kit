# CLI Reference

All available commands for this project.

## Setup Commands

### Install dependencies

```bash
npm install
```

Installs no runtime dependencies (pure Markdown project). Only used for running scripts.

### Initialize workspace

```bash
npm run init
```

Checks workspace health and creates necessary directories if missing.

### Check workspace health

```bash
npm run check
```

Runs a quick health check of the workspace structure.

### Validate skills and rules

```bash
npm run validate
```

Runs `scripts/validate-skills.mjs` which checks:
- All `.cursor/rules/*.mdc` files have valid frontmatter
- All `.cursor/skills/*/SKILL.md` files have required sections
- No SKILL.md exceeds 120 lines (warning)
- No rule exceeds 150 lines (warning)

## GitHub Actions (CI)

Validation runs automatically on push and PR to paths:
- `.cursor/rules/**`
- `.cursor/skills/**`
- `scripts/validate-skills.mjs`
- `AGENTS.md`
- `CLAUDE.md`

See `.github/workflows/validate.yml`.

## Skill Generator

### Generate a new skill

```bash
node scripts/generate-skill.mjs
```

Interactive CLI that:
1. Prompts for skill name (kebab-case)
2. Prompts for purpose (one sentence)
3. Prompts for trigger phrases
4. Creates `.cursor/skills/<name>/SKILL.md`
5. Creates `.cursor/skills/<name>/GUIDE.md`
6. Updates `.cursor/skills/routing.yaml`

### Generate a new skill (non-interactive)

```bash
SKILL_NAME=my-skill PURPOSE="One sentence." TRIGGERS="do X, handle Y" node scripts/generate-skill.mjs
```

## Agent Invocation Prompts

### Onboard

```
Read AGENTS.md and workflows/onboard.md.
Summarize this project and recommend the next step.
```

### Plan a feature

```
Use workflows/plan.md to plan a new [feature name].
Do not edit files yet.
```

### Implement a feature

```
Use agents/implementer.md to implement the approved plan.
Follow .cursor/rules/03-surgical-changes.mdc.
```

### Review code

```
Use agents/code-reviewer.md and .cursor/skills/code-review/SKILL.md to review the latest changes.
```

### Debug a bug

```
Use agents/bug-fixer.md and .cursor/skills/debug-bug/SKILL.md to find and fix this bug with minimal changes.
```

### Reflect (After-Action Review)

```
Use workflows/reflect.md to extract reusable learnings and update memory files.
```

### Evaluate quality

```
Use workflows/evaluator-optimizer.md to evaluate and refine before claiming done.
```

### Get approval before changes

```
Use .cursor/rules/09-approval-workflow.mdc before implementing significant changes.
```

### Create a new agent

```
Use .cursor/skills/create-agent/SKILL.md to create a new agent role.
```

### Create a new skill

```
Use .cursor/skills/create-skill/SKILL.md to create a new skill.
```

### After-Action Review

```
Use .cursor/skills/aar/SKILL.md to run an after-action review of this session.
```

### Evaluate quality

```
Use .cursor/rules/10-context-optimization.mdc to optimize context before claiming done.
```

## Cursor-Specific Commands

### List available skills

```
What skills are available in .cursor/skills/?
```

### Check skill structure

```
Run npm run validate and summarize the results.
```

### Update routing

```
Check .cursor/skills/routing.yaml and update entries for any new skills.
```

### Sync AGENTS.md and CLAUDE.md

```
Sync changes from AGENTS.md to CLAUDE.md and vice versa.
```

## Git Commands

### Commit changes

Use the commit skill (see `.cursor/skills/commit/SKILL.md`):

```
Use the commit skill to create a commit with conventional format.
```

### Create a branch

Use the create-branch skill:

```
Use the create-branch skill to create a new branch.
```

## Troubleshooting Commands

### Validate everything

```bash
npm run validate && npm run check
```

### Check for broken skill references

```bash
node scripts/validate-skills.mjs
```

### List all rules and skills

```bash
find .cursor/rules -name "*.mdc" -exec basename {} \;
find .cursor/skills -name "SKILL.md" -exec dirname {} \;
```

## Workflow Files Reference

| File | Purpose |
|---|---|
| `workflows/onboard.md` | First-time setup and project overview |
| `workflows/plan.md` | Feature planning procedure |
| `workflows/implement.md` | Feature implementation procedure |
| `workflows/review.md` | Code review procedure |
| `workflows/debug.md` | Bug fixing procedure |
| `workflows/reflect.md` | After-Action Review (AAR) |
| `workflows/evaluator-optimizer.md` | Quality assurance loop |
| `workflows/human-gate.md` | Approval gate workflow |
| `workflows/release.md` | Release preparation |

## Rule Files Reference

Always-on rules (loaded for every task):
- `00-core.mdc` — core expectations
- `01-karpathy-behavior.mdc` — reduce AI mistakes
- `03-surgical-changes.mdc` — minimal edit discipline
- `05-security.mdc` — security rules

Task-specific rules (loaded by context):
- `02-agent-workflow.mdc` — when to use which workflow
- `04-architecture.mdc` — architecture conventions
- `06-testing.mdc` — testing and verification
- `07-docs.mdc` — documentation standards
- `08-memory.mdc` — memory file updates
- `09-approval-workflow.mdc` — approval gates
- `10-context-optimization.mdc` — token efficiency
- `11-rule-testing.mdc` — rule validation

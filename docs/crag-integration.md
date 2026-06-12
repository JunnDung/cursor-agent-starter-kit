# Governance

This project uses crag for cross-tool rule synchronization.

## Quick Start

```bash
# Install crag
npm install -g @whitehatd/crag

# Analyze this project and generate governance.md
npx @whitehatd/crag analyze

# Compile to all agent formats
npx @whitehatd/crag compile --target all

# Check for drift
npx @whitehatd/crag audit

# Install git hook (auto-recompile on commit)
npx @whitehatd/crag hook install
```

## What is crag?

crag reads your project — CI workflows, package.json, configs — and generates a single `governance.md` that compiles to rules for every AI tool your team uses:

| Tool | Output | Format |
|---|---|---|
| Claude Code | `CLAUDE.md` | Markdown |
| Cursor | `.cursor/rules/governance.mdc` | MDC frontmatter |
| Codex/Aider | `AGENTS.md` | Markdown |
| GitHub Copilot | `.github/copilot-instructions.md` | Plain text |
| Gemini CLI | `GEMINI.md` | Markdown |
| Cline | `.clinerules` | Plain text |
| Continue.dev | `.continuerules` | Plain text |
| Windsurf | `.windsurf/rules/governance.md` | Markdown |
| GitHub Actions | `.github/workflows/gates.yml` | YAML |
| Husky | `.husky/pre-commit` | Shell |
| pre-commit | `.pre-commit-config.yaml` | YAML |

## Workflow

### 1. Edit governance.md

Manually maintain `governance.md` as the single source of truth. Keep it 20-30 lines.

### 2. Compile to all tools

```bash
crag compile --target all
```

### 3. Check for drift

```bash
crag audit
```

### 4. Install auto-recompile hook

```bash
crag hook install --drift-gate
```

## Governance.md Template

```markdown
# Governance

## Gates (run in order, stop on failure)

### Format
- npm run lint                    # [MANDATORY]
- npm run typecheck               # [MANDATORY]

### Test
- npm test                       # [MANDATORY]

### Build
- npm run build                  # [MANDATORY]

## Stack

- TypeScript
- Node.js
```

## Customization

Edit `governance.md` to match your project stack. Run `crag compile --target all` after changes.

## See Also

- [crag documentation](https://crag.sh/docs)
- [crag GitHub](https://github.com/WhitehatD/crag)
- [governance format spec](https://github.com/WhitehatD/crag/blob/master/docs/governance-format.md)

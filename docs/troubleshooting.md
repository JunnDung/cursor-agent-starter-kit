# Troubleshooting Guide

Common issues and their solutions for this starter kit.

## Skill Not Triggering

**Symptom:** The AI doesn't activate the expected skill.

**Check:**
1. Is the skill in `.cursor/skills/routing.yaml`? If using routing.yaml, make sure the trigger phrase matches.
2. Does the SKILL.md have a clear "When to use" or "Trigger phrases" section?
3. Did you mention the trigger phrase? Try using exact phrases from the skill.
4. Run `npm run validate` to check for structural issues.

**Fix:**
- Add trigger phrases to the "Trigger phrases" section in SKILL.md.
- If the skill has no routing entry, add one to `routing.yaml`.
- For skills that need GUIDE.md, ensure the extended guide exists.

## Rule Not Loading

**Symptom:** A Cursor rule isn't being applied.

**Check:**
1. Is the rule in `.cursor/rules/` with a `.mdc` extension?
2. Does the rule have valid YAML frontmatter with `description`, `alwaysApply`, `priority`, and `tags`?
3. If `alwaysApply: false`, does the task context match the rule's tags?
4. Run `npm run validate` to check frontmatter.

**Fix:**
- Add missing frontmatter fields.
- If you want a rule to always apply, set `alwaysApply: true`.
- Check Cursor's settings: Settings > Features > Rules.

## AGENTS.md Not Being Read

**Symptom:** The AI ignores instructions in AGENTS.md.

**Check:**
1. Is the file named exactly `AGENTS.md` (uppercase)?
2. Is it in the project root?
3. Cursor also reads `CLAUDE.md` — you can have both.

**Fix:**
- Rename to `AGENTS.md` if currently something else.
- Verify file is readable (not gitignored).

## Skill Structure Warnings

**Symptom:** `npm run validate` reports warnings.

**Common warnings:**

| Warning | Cause | Fix |
|---------|-------|-----|
| SKILL.md exceeds 120 lines | Too much content in main file | Split extended content into GUIDE.md |
| Missing "## Output" section | No output format defined | Add Output format section |
| Missing priority/tags | Rule frontmatter incomplete | Add missing frontmatter fields |

## MCP Server Not Connecting

**Symptom:** MCP server tools don't appear in Cursor.

**Check:**
1. Is the server configured in `.cursor/mcp.json`?
2. Is the command executable? Try running it directly in terminal.
3. Did you reload Cursor after adding the server?
4. Are required API keys set in the `env` block?

**Fix:**
1. Reload Cursor window: Cmd/Ctrl+Shift+P > "Reload Window".
2. Check Cursor console: View > Toggle Developer Tools > Console.
3. Verify the server command works standalone.
4. See `docs/mcp-setup.md` for MCP configuration details.

## Validation Script Fails

**Symptom:** `npm run validate` exits with errors.

**Common errors:**

| Error | Cause | Fix |
|-------|-------|-----|
| Missing frontmatter | No YAML block at top | Add `---` frontmatter at top |
| Missing description | No `description:` in frontmatter | Add description field |
| Missing SKILL.md | Skill directory missing the file | Create SKILL.md in the directory |

## Memory Files Not Updating

**Symptom:** Updates to memory files seem to get lost.

**Check:**
1. Are you editing the right memory file?
   - `memory/learnings.md` — general lessons
   - `memory/decisions.md` — architecture decisions
   - `memory/preferences.md` — team preferences
2. Is the file tracked by git? It should be.
3. Are changes being committed?

**Fix:**
- Commit memory file changes to persist them.
- Use `workflows/reflect.md` to systematically update memory after sessions.

## Claude Code vs Cursor Differences

**Symptom:** Works in Cursor but not in Claude Code.

**Check:**
- Claude Code reads `CLAUDE.md`, not `AGENTS.md` (though it also reads AGENTS.md).
- Skills in `.cursor/skills/` are Cursor-specific.
- Rules in `.cursor/rules/` are Cursor-specific.

**Fix:**
- This project now includes `CLAUDE.md` for cross-tool compatibility.
- For skills that should work across tools, use generic markdown without tool-specific references.
- See `memory/decisions.md` for the cross-tool compatibility decision.

## Hooks Not Running

**Symptom:** Custom hooks defined in `.cursor/hooks.json` don't execute.

**Check:**
1. Is the file at `.cursor/hooks.json`?
2. Is the JSON valid? Validate at jsonlint.com.
3. Do the referenced scripts exist and are executable?
4. Is the hook matcher pattern correct?

**Fix:**
- Verify JSON syntax.
- Check that hook scripts are executable (`chmod +x` on Unix).
- Test the hook script standalone.

## Pre-commit Hook Blocked

**Symptom:** Git commits fail due to AI context linter.

**Check:**
1. Is the pre-commit hook installed?
2. Check which rule is blocking: run the linter manually.
3. Review the blocked content for secrets or bypass patterns.

**Fix:**
- Remove hardcoded secrets from AI context files.
- Don't include placeholder patterns like `"quick version"` or `"simplified"`.
- Use `--no-verify` only in emergencies (and explain why).

## Need More Help

1. Check `docs/vietnamese-guide.md` for Vietnamese-language guidance.
2. Review `memory/learnings.md` for lessons from past sessions.
3. Check the backlog at `tasks/backlog.md` for known gaps.
4. Search the [awesome-agent-skills](https://github.com/heilcheng/awesome-agent-skills) repo for related skills.

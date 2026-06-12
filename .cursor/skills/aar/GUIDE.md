# After-Action Review — Extended Guide

## Philosophy

After-Action Review (AAR) is a discipline from military and project management practice. Applied to AI coding agents, it means:

> Every session produces knowledge. Capture it before it evaporates.

The goal is NOT to write lengthy reports. It's to update memory files with specific, actionable lessons.

## When to Use Full AAR vs. Quick Capture

### Full AAR (use the SKILL.md steps)

- After feature implementation spanning multiple files
- After debugging session with discovered root causes
- After architectural decisions
- When the user explicitly asks for reflection
- End of significant working session

### Quick Capture (update only)

- After small bug fix
- After single-file change
- When user corrects a minor mistake
- After a quick clarification

## Correction Pattern Analysis

Don't just log "user corrected me". Trace to root cause:

| Symptom | Root Cause | Memory Target |
|---|---|---|
| User repeated same instruction twice | Missing skill trigger recognition | `learnings.md` |
| User said "don't do that" | Unclear boundary in agent role | Update agent role |
| User said "follow existing pattern" | Missing project context | `memory/project.md` |
| User said "always use X" | Preference not captured | `preferences.md` |

## Memory File Update Patterns

### `memory/learnings.md`

Add under a dated section:

```md
## Session YYYY-MM-DD

- **Pattern**: [what went wrong]
- **Root cause**: [why it happened]
- **Prevention**: [what to do differently]
```

### `memory/decisions.md`

Add decision record:

```md
## Decision N: [title]

**Date**: YYYY-MM-DD
**Context**: [why this was needed]
**Decision**: [what was chosen]
**Alternatives considered**: [what else was possible]
**Consequence**: [impact on project]
```

### `memory/preferences.md`

Add preference:

```md
## [Category]

- **Preference**: [specific preference]
- **Origin**: [session date, context]
- **Rationale**: [if non-obvious]
```

## Skill Health Checklist

Run these checks after every AAR:

1. Line count: Any SKILL.md > 120 lines?
2. Routing: Any new skill without routing.yaml entry?
3. Guide sync: Any SKILL.md with "see GUIDE.md" but no GUIDE.md?
4. Frontmatter: Any .mdc without description/alwaysApply/priority/tags?

## Advanced: Session Transcript Analysis

For agents that support transcript access (Claude Code JSONL sessions), analyze:

```bash
# Pseudocode for transcript analysis
for message in session_transcript:
    if message.type == "user_correction":
        corrections.append(message)
    if message.type == "tool_result" and message.is_error:
        errors.append(message)
    if message.type == "user" and "always" in message:
        preferences.append(message)
```

Key signals to capture:
- User corrections (redirects, abandonments)
- Tool result errors
- "Always/never" statements from users
- Alternative approaches mentioned but not taken

## Tools for Session Analysis

- `agent-retro` (giannimassi/agent-retro) — Claude Code session retrospective skill
- `retro` (so0osh/claude-plugin-retro) — behavioral pattern + memory writing
- `session-retrospective` (accidentalrebel) — summary generation from JSONL
- `cc-search` — full-text search across past sessions

These tools read session transcripts from:
- Claude Code: `~/.claude/projects/<project-id>/<session-id>.jsonl`
- Cursor: Session transcripts (export from chat history)

## Anti-Patterns to Avoid

1. **Don't over-document** — Only update memory for lessons that will genuinely be reused.
2. **Don't log everything** — Brief sessions need brief captures.
3. **Don't blame the agent** — Focus on system improvements (rules, skills, context).
4. **Don't update stale files** — If a memory file already covers the topic, merge rather than duplicate.
5. **Don't skip skill health** — Outdated skills cost more than the time to maintain them.

## See Also

- `workflows/reflect.md` — workflow definition for AAR
- `memory/learnings.md` — where lessons are stored
- `memory/decisions.md` — where decisions are stored
- `.cursor/rules/08-memory.mdc` — memory update rules

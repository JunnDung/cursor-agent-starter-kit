# After-Action Review (AAR) Skill

## Purpose

Extract reusable learning from the current session and update memory files. Turns ephemeral interactions into persistent knowledge.

## When to use

Use this skill when:
- The user says "reflect", "after-action review", "what did we learn"
- After a meaningful feature implementation
- After repeated corrections from the user
- After a complex bug fix
- After significant architectural decisions
- At the end of a working session

## Trigger phrases

- "what did we learn"
- "session summary"
- "lessons learned"
- "retro"
- "after-action review"
- "reflect on this session"

## Steps

1. **Review what changed** — List files modified, added, or deleted during this session.
2. **Identify repeated corrections** — Did the user correct the same mistake twice? Flag the pattern.
3. **Identify lasting preferences** — Did the user state a preference that should persist across sessions?
4. **Identify architecture decisions** — Was a non-obvious choice made that future sessions should know?
5. **Check skill health** — Did any SKILL.md exceed 120 lines? Is routing.yaml up to date?
6. **Check routing** — Is the routing.yaml routing table still accurate?
7. **Update memory files** — Only if the lesson is genuinely reusable. Target the right file:
   - `memory/learnings.md` — lessons that apply to AI coding agents generally
   - `memory/decisions.md` — architecture decisions
   - `memory/preferences.md` — team/user preferences
8. **Propose rule changes** — Only if the lesson should always apply, not just this project.

## Output format

```txt
## Session Summary

**Files changed:** list
**Files added:** list
**Files deleted:** list

## Corrections (patterns)
- correction pattern and root cause

## Decisions Made
- decision and rationale

## Preferences Captured
- preference and where stored

## Memory Updates
- file: what changed

## Rule Candidates
- proposed rule: reason

## Skill Health
- skills checked and status
- any line-count warnings

## Task Updates
- tasks to move to done or add to backlog
```

## Self-Maintenance Signals

After every AAR, check and report:
- Any SKILL.md exceeds 120 lines -> flag for GUIDE.md split
- Any routing.yaml entry missing extended guide -> create GUIDE.md
- Any memory file not updated in 5+ sessions -> prompt for review
- Any rule drift from frontmatter standard -> fix frontmatter

## Session Discipline (Quick Version)

For quick sessions or trivial tasks, use the abbreviated version:

1. Did the user correct anything? -> Log to `memory/learnings.md`
2. Did we make a decision? -> Log to `memory/decisions.md`
3. Did preferences emerge? -> Log to `memory/preferences.md`

No full report needed. Just update the relevant file.

## Cross-Tool Compatibility

This skill works with any AI coding agent that supports:
- File system access (Read/Write tools)
- Persistent storage (memory files)

Tested with: Cursor, Claude Code, Codex.

## Extended Guide

For deeper patterns, see `.cursor/skills/aar/GUIDE.md` (if available).

## Success criteria

- Memory files updated only for genuinely reusable lessons
- Corrections traced to root cause, not just symptoms
- Skill health check included in every AAR
- Task updates moved to `tasks/backlog.md` or `tasks/done.md`

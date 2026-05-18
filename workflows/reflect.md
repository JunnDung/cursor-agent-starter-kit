# Reflect Workflow (After-Action Review)

## Goal

Extract reusable learning from a session using After-Action Review discipline.

## Session Discipline

For every non-trivial task, briefly scan what went wrong and what worked.
Update memory files only if the lesson should persist across sessions.

## Steps

1. **Review what changed** — List files modified, added, or deleted.
2. **Identify repeated corrections** — Did the user correct the same mistake twice?
3. **Identify lasting preferences** — Did the user state a preference that should persist?
4. **Identify architecture decisions** — Was a non-obvious choice made that future sessions should know?
5. **Check skill health** — Did any SKILL.md exceed 120 lines? Is routing.yaml up to date?
6. **Update the correct memory file** — Only if the lesson is genuinely reusable.
7. **Suggest rule changes** — Only if the lesson should always apply, not just this project.

## Trigger

Use this workflow after:
- meaningful feature implementation
- repeated corrections from the user
- a complex bug fix
- significant architectural decision
- end of a working session

## Output

```txt
Session summary:
- Changed:
- Corrections (if any):

Memory updates:
- file:
- change:

Rule candidates:
- proposed rule:
- reason:

Skill health:
- skills checked:
- warnings (line count, missing sections):

Task updates:
- task:
- status:
```

## Self-Maintenance Signals

After every reflect, check:
- Any SKILL.md exceeds 120 lines → flag for split
- Any routing.yaml entry missing an extended guide → create GUIDE.md
- Any memory file not updated in 5+ sessions → prompt for review

---
description: Human-Gate workflow that pauses for human input at critical decision points.
alwaysApply: false
---

# Human-Gate Workflow

A workflow that pauses for human input at critical decision points.

## When to use

Use this workflow when:
- multiple approaches are possible
- the user needs to choose a direction
- architectural decisions are needed
- the change is significant
- you are uncertain about the best path

## Gate types

### Information Gate

Share findings and wait for direction:

```txt
## What I found

- fact 1
- fact 2

## Options

A) Approach A — pros/cons
B) Approach B — pros/cons
C) Approach C — pros/cons

Which approach do you prefer?
```

### Approval Gate

Present plan and wait for approval before proceeding.

### Checkpoint Gate

Pause at milestones during long tasks:

```txt
## Checkpoint: Phase 1 done

Completed:
- item 1
- item 2

Next: Phase 2

Continue? (yes/no/modify)
```

### Verification Gate

Show results and ask for sign-off before finalizing.

## Standard gate format

```txt
## Gate: [name]

**Status:** [pending/approved/rejected]

**Summary:**
- what was done
- what will happen next

**Your choice:**
- Reply "yes" / "proceed" / "approve"
- Reply "no" / "stop"
- Reply "modify X"
- Reply [your preference]
```

## Anti-patterns

Do NOT:
- skip gates on significant changes
- auto-proceed past approval gates
- make unilateral architectural decisions
- bury the gate in a wall of text

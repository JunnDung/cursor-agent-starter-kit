# Refactor Safely Skill

## Purpose

Improve code structure without changing behavior.

## Precondition

Do not refactor unless the user explicitly asks.

## Steps

1. Identify current behavior.
2. Identify refactor goal.
3. List invariants that must not change.
4. Make small mechanical changes.
5. Run tests after each meaningful step.
6. Avoid mixing refactor with feature work.

## Rules

- No behavior changes.
- No public API changes unless requested.
- No formatting-only churn.
- Preserve tests.
- Prefer incremental commits.

## Output format

```txt
Refactor goal:
Invariants:
Changes:
Behavior changes: none / listed
Verification:
```

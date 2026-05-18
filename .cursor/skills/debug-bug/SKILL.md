# Debug Bug Skill

## Purpose

Find and fix a bug with minimal changes.

## Steps

1. Reproduce or reason about the bug.
2. Locate the smallest relevant code path.
3. Identify the likely root cause.
4. Propose the smallest fix.
5. Implement only the fix.
6. Add regression test if practical.
7. Explain how to verify.

## Avoid

- broad refactors
- changing unrelated behavior
- adding dependencies
- rewriting architecture

## Output format

```txt
Bug:
Root cause:
Fix:
Files changed:
Regression test:
Verification:
```

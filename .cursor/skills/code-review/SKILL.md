# Code Review Skill

## Purpose

Review code changes for correctness, maintainability, security, and test coverage.

## Steps

1. Identify changed files.
2. Understand intended behavior.
3. Check logic correctness.
4. Check error handling.
5. Check input validation.
6. Check security risks.
7. Check tests.
8. Separate blocking issues from suggestions.

## Severity levels

- critical: security/data loss/build broken
- high: likely runtime bug
- medium: maintainability or missing validation
- low: style or minor clarity

## Output format

```txt
Status: pass / needs changes / high risk

Findings:
1. [severity] file:line
   Problem:
   Why it matters:
   Suggested fix:

Tests to add:

Final recommendation:
```

## Boundaries

Do not rewrite code unless explicitly asked.

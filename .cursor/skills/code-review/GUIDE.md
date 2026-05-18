# Code Review — Extended Guide

Loaded only when you need deeper context on code review.

## Review Checklist

### Correctness
- [ ] Logic is sound
- [ ] Edge cases are handled
- [ ] No off-by-one errors
- [ ] Type boundaries are correct

### Security
- [ ] No SQL injection vectors
- [ ] No XSS vectors
- [ ] Input validation exists
- [ ] No secrets in code
- [ ] Authentication/authorization is correct

### Performance
- [ ] No N+1 queries
- [ ] Large data handled in chunks
- [ ] Caching is appropriate
- [ ] No unnecessary work

### Maintainability
- [ ] Naming is clear
- [ ] Functions are small (<50 lines)
- [ ] No deeply nested logic
- [ ] Error messages are actionable
- [ ] Tests cover behavior, not implementation

## Severity Reference

| Level | Meaning | Action |
|---|---|---|
| `critical` | Security vulnerability or data loss | Block merge |
| `high` | Runtime bug or breakage | Fix before merge |
| `medium` | Missing validation or poor error handling | Fix or document |
| `low` | Style, naming, or minor clarity | Suggestion |

## Diff Review Order

1. Read the acceptance criteria / PR description
2. Understand the test cases
3. Read changed files top-to-bottom
4. Check tests for coverage and correctness
5. Mark findings with file:line reference

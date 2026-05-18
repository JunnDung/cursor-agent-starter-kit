# Refactor Safely — Extended Guide

Loaded only when you need deeper context on safe refactoring.

## Invariants Checklist

Before refactoring, confirm these will not change:

- [ ] External API surface (function signatures, return types)
- [ ] Data format (JSON output, file format, DB schema)
- [ ] Behavior observed by users
- [ ] Error messages returned
- [ ] Performance characteristics

## Safe Refactor Sequence

```
1. Confirm invariants with the user
2. Write a failing test that captures current behavior
3. Make the smallest structural change
4. Run the test — it should still pass
5. Repeat steps 3-4 until done
6. Run full test suite
7. Commit
```

## High-Risk Refactors

These require extra care:

| Refactor | Risk | Mitigation |
|---|---|---|
| Rename public function | Downstream breakage | Update all call sites first |
| Change data shape | Serialization errors | Type narrowing + tests |
| Extract function from large function | Logic duplication | Keep original until verified |
| Introduce caching | Stale data | Add cache-invalidation tests |
| Change error handling | Swallowed exceptions | Cover all error paths |

## When to Stop

- Behavior changes → revert and restart
- Test fails → revert and restart
- More than 3 files touched for one logical change → split into smaller steps

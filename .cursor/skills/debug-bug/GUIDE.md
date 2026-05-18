# Debug Bug — Extended Guide

Loaded only when you need deeper context on debugging.

## Root Cause Patterns

### Category: Logic Errors
- Boundary conditions wrong
- Comparison operator reversed
- Off-by-one index
- Wrong variable used
- State not updated correctly

### Category: Async Bugs
- Race condition (shared state mutated)
- Missing await
- Promise not handled
- Callback order wrong

### Category: Data Bugs
- Null/undefined not checked
- Wrong default value
- Type coercion unexpected
- Array/object mutated unexpectedly

### Category: Environment Bugs
- Wrong env variable
- Missing dependency
- Port/path not configured
- Permissions issue

## Debug Strategy

```
1. Reproduce — can you make it fail reliably?
   ↓ yes
2. Isolate — smallest input that triggers the bug
   ↓ yes
3. Locate — find the exact line where it diverges
   ↓ yes
4. Fix — change the smallest amount
   ↓ yes
5. Verify — confirm fix with same reproduction
   ↓ yes
6. Extend — add regression test
```

## When to Stop

- You found and fixed the root cause → done
- You found but can't fix safely → document it
- You can't reproduce it → document the attempt
- Root cause is outside the scope → escalate

# Write Tests — Extended Guide

Loaded only when you need deeper context on testing.

## Test Naming Conventions

```
describe("FeatureName")
  it("should do X when Y")
  it("should throw when Z is invalid")
  it("should return empty array when no results")
```

## Test Structure

```
Arrange — set up inputs and mocks
Act — call the function
Assert — check the result
```

## What to Test

### High value (always test)
- Business logic
- Data transformations
- Error handling paths
- Edge cases with business meaning

### Medium value (test when complex)
- UI interactions
- Integration points
- Performance requirements

### Low value (skip)
- Trivial getters/setters
- One-liner wrappers
- Framework internals

## Anti-patterns

- Testing implementation details (brittle)
- Over-mocking (tests pass but code breaks)
- Tests that depend on each other
- Asserting on random values
- No teardown for shared state

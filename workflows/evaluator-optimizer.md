---
description: Evaluator-Optimizer workflow for quality assurance. Use when building features or fixing bugs.
alwaysApply: false
---

# Evaluator-Optimizer Workflow

An iterative loop that ensures quality before claiming done.

## When to use

Use this workflow when:
- the task has measurable quality criteria
- the user expects thoroughness
- the domain is security-sensitive
- the task involves multiple files
- you are unsure about the quality of your approach

## The loop

```
Generate → Evaluate → Refine → Evaluate → Refine → ... → Done
```

## Steps

### 1. Generate

Build the initial solution.

### 2. Evaluate

Critically examine what you built:

- Does it solve the stated problem?
- Are there edge cases not covered?
- Is the code readable and maintainable?
- Are there security concerns?
- Does it match existing project conventions?
- Are tests sufficient?

### 3. Refine

Address issues found during evaluation.

### 4. Repeat

Continue evaluating and refining until:
- No critical or high issues remain
- Medium issues are documented or fixed
- Low issues are noted for future improvement

### 5. Report

```txt
Evaluation summary:
- Critical issues found: N → Fixed: N
- High issues found: N → Fixed: N
- Medium issues: documented
- Low issues: noted

Remaining risks:
- risk 1

Done.
```

## Stop condition

Stop when:
- All critical/high issues are resolved
- The user approves the solution
- You have iterated 3 times without improvement

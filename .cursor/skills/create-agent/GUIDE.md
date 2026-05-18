# Create Agent — Extended Guide

This guide is loaded only when you need deeper context on creating agents.

## Common Patterns

### Pattern 1: Minimal Agent
Best for: single-purpose agents that answer questions or generate text.

```md
# Minimal Agent

## Purpose
One sentence.

## Trigger
Use when...

## Process
1. Read the request
2. Apply domain knowledge
3. Return structured output

## Output
```txt
Status:
Result:
```
```

### Pattern 2: Tool-Using Agent
Best for: agents that need to read files, run commands, or query data.

```md
# Tool-Using Agent

## Purpose
One sentence.

## Trigger
Use when...

## Tools
- readFile: inspect source files
- searchCodebase: find references
- runCommand: execute tests

## Process
1. Clarify the goal
2. Inspect relevant files
3. Plan the approach
4. Execute with tools
5. Summarize findings

## Output
```txt
Status:
Findings:
Next step:
```
```

### Pattern 3: Multi-Step Agent
Best for: agents that handle complex workflows with state.

```md
# Multi-Step Agent

## Purpose
One sentence.

## State
- current_step: string
- context: object
- results: array

## Steps
1. Initialize
2. Validate
3. Process
4. Validate
5. Finalize

## Transitions
- step1_done → step2
- step2_done → step3
- validation_failed → halt
```

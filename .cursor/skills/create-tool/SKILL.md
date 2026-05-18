# Create Tool Skill

## Purpose

Create a new tool for an AI agent project.

## When to use

Use this skill when adding:
- calculator tools
- API tools
- file tools
- database tools
- search tools
- custom function tools

## Steps

1. Inspect existing tool patterns.
2. Define the tool name and purpose.
3. Define input schema.
4. Validate inputs with Zod if TypeScript is used.
5. Keep execution logic small.
6. Handle expected errors.
7. Export the tool from the correct index file.
8. Add usage example.
9. Add tests if the project has tests.

## Tool design rules

- One tool should do one thing.
- Tool names should be action-oriented.
- Inputs should be explicit.
- Outputs should be serializable.
- Never let tools expose secrets.
- Never allow unsafe file or shell access by default.

## Output format

```txt
Tool:
Purpose:
Input schema:
Files changed:
Example usage:
Tests:
```

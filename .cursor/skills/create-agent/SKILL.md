# Create Agent Skill

## Purpose

Create a new reusable agent role for this starter kit.

## When to use

Use this skill when the user asks to create:
- a new coding agent
- a specialized role
- a reusable assistant behavior
- a domain-specific agent

## Inputs

Ask or infer:
- agent name
- purpose
- when to use
- required context
- boundaries
- output format

## Steps

1. Choose a clear kebab-case filename.
2. Create the file in `agents/`.
3. Use the standard agent template.
4. Keep the agent role focused.
5. Add example invocation.
6. Update `AGENTS.md` if this is a core agent.

## Template

```md
# Agent Name

## Purpose

One sentence.

## When to use

Use this agent when...

## Required context

- files:
- docs:
- user input:

## Process

1. Step one.
2. Step two.
3. Step three.

## Boundaries

Do not...

## Output format

```txt
Status:
Findings:
Recommendation:
```

## Example invocation

```txt
Use agents/agent-name.md to...
```
```

## Extended Guide

For deeper patterns and examples, see `.cursor/skills/create-agent/GUIDE.md`.

## Success criteria

- agent is specific
- agent has boundaries
- agent has clear output format
- no duplicate agent already exists

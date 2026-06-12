#!/usr/bin/env node
/**
 * generate-agent.mjs
 *
 * Interactive CLI to scaffold a new agent role.
 * Creates agents/<name>.md and optionally SKILL.md + GUIDE.md.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = path.resolve(__dirname, "..");

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function main() {
  console.log("\n--- Agent Generator ---\n");

  let name = await ask("Agent name (kebab-case, e.g. my-agent): ");
  while (!name || !/^[a-z0-9-]+$/.test(name)) {
    console.log("Use lowercase letters, numbers, and hyphens only.");
    name = await ask("Agent name (kebab-case, e.g. my-agent): ");
  }

  const purpose = await ask("Purpose (one sentence): ");
  while (!purpose || purpose.length < 10) {
    console.log("Purpose must be at least 10 characters.");
    name = await ask("Purpose (one sentence): ");
  }

  let whenToUse = await ask("When to use (e.g. 'implement a feature'): ");
  while (!whenToUse) {
    whenToUse = await ask("When to use: ");
  }

  const boundaries = await ask(
    "Boundaries (comma-separated, e.g. 'no architecture changes, no new deps'): "
  );
  const boundariesList = boundaries
    .split(",")
    .map((b) => b.trim())
    .filter(Boolean);

  const agentFile = path.join(BASE, "agents", `${name}.md`);
  if (fs.existsSync(agentFile)) {
    console.error(`\nError: Agent "${name}" already exists at ${agentFile}`);
    process.exit(1);
  }

  const agentMd = `# ${name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}

## Purpose

${purpose}

## When to use

Use this agent when${whenToUse ? ` ${whenToUse}` : "..."}.

## Required context

- files: (list files the agent should read first)
- docs: (list docs or rules relevant to this agent)
- user input: (what the user needs to provide)

## Process

1. Step one.
2. Step two.
3. Step three.

## Boundaries

Do not:
${boundariesList.map((b) => `- ${b}`).join("\n") || "- ..."}

## Output format

\`\`\`txt
Status:
Findings:
Recommendation:
\`\`\`

## Example invocation

\`\`\`txt
Use agents/${name}.md to...
\`\`\`
`;

  fs.writeFileSync(agentFile, agentMd);

  let createSkill = await ask(
    "Create a corresponding skill too? (y/N): "
  );
  if (createSkill.toLowerCase() === "y" || createSkill.toLowerCase() === "yes") {
    const skillDir = path.join(BASE, ".cursor", "skills", name);
    if (!fs.existsSync(skillDir)) {
      fs.mkdirSync(skillDir, { recursive: true });

      const skillMd = `# ${name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}

## Purpose

${purpose}

## When to use

Use this skill when${whenToUse ? ` ${whenToUse}` : "..."}.

## Steps

1. Step one.
2. Step two.
3. Step three.

## Output format

\`\`\`txt
Result:
Files changed:
Verification:
\`\`\`

## Extended Guide

For deeper patterns and examples, see \`GUIDE.md\` in the same folder.

## Success criteria

- criterion one
- criterion two
`;

      const guideMd = `# ${name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} — Extended Guide

## Overview

Deep context for the \`${name}\` skill.

## Detailed Patterns

Describe the main patterns this skill covers.

## Examples

### Example 1

Description of the first example.

### Example 2

Description of the second example.

## Edge Cases

Describe edge cases and how to handle them.
`;

      fs.writeFileSync(path.join(skillDir, "SKILL.md"), skillMd);
      fs.writeFileSync(path.join(skillDir, "GUIDE.md"), guideMd);

      const routingFile = path.join(BASE, ".cursor", "skills", "routing.yaml");
      if (fs.existsSync(routingFile)) {
        const routing = fs.readFileSync(routingFile, "utf-8");
        const trigger = whenToUse.split(",")[0].trim();
        const newEntry = `| \`${name}\` | ${trigger}, ... | — |`;
        const insertPoint = routing.lastIndexOf("\n| `");
        if (insertPoint !== -1) {
          const updated =
            routing.slice(0, insertPoint) +
            "\n" +
            newEntry +
            routing.slice(insertPoint);
          fs.writeFileSync(routingFile, updated);
        }
      }

      console.log(`Created: .cursor/skills/${name}/SKILL.md`);
      console.log(`Created: .cursor/skills/${name}/GUIDE.md`);
    }
  }

  console.log(`\nCreated: agents/${name}.md`);
  console.log(
    `\nDone. Edit the agent file and update AGENTS.md if needed.\n`
  );
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});

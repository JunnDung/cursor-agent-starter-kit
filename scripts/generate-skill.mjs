#!/usr/bin/env node
/**
 * generate-skill.mjs
 *
 * Interactive CLI to scaffold a new Cursor skill from template.
 * Creates SKILL.md + GUIDE.md and updates routing.yaml.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(BASE, ".cursor", "skills");
const ROUTING_FILE = path.join(SKILLS_DIR, "routing.yaml");

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
  console.log("\n--- Skill Generator ---\n");

  let name = await ask("Skill name (kebab-case, e.g. my-skill): ");
  while (!name || !/^[a-z0-9-]+$/.test(name)) {
    console.log("Use lowercase letters, numbers, and hyphens only.");
    name = await ask("Skill name (kebab-case): ");
  }

  const purpose = await ask("Purpose (one sentence): ");
  while (!purpose || purpose.length < 10) {
    console.log("Purpose must be at least 10 characters.");
    const purpose = await ask("Purpose (one sentence): ");
  }

  let triggers = await ask(
    "When-to-use trigger phrases (comma-separated, e.g. 'do X', 'handle Y'): "
  );
  while (!triggers) {
    triggers = await ask(
      "When-to-use trigger phrases (comma-separated): "
    );
  }

  const skillDir = path.join(SKILLS_DIR, name);

  if (fs.existsSync(skillDir)) {
    console.error(
      `\nError: Skill "${name}" already exists at ${skillDir}`
    );
    process.exit(1);
  }

  fs.mkdirSync(skillDir, { recursive: true });

  const triggerLines = triggers
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => `- "${t}"`)
    .join("\n");

  const skillMd = `# ${name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}

## Purpose

${purpose}

## When to use

Use this skill when${triggers.split(",")[0].trim() ? ` ${triggers.split(",")[0].trim()}` : "..."}.

## Trigger phrases

${triggerLines || '- "..."'}

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

  fs.writeFileSync(path.join(skillDir, "SKILL.md"), skillMd);

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

## Common Pitfalls

- Pitfall 1 and how to avoid it
- Pitfall 2 and how to avoid it

## See Also

- Related skill: \`../other-skill/SKILL.md\`
- Related workflow: \`workflows/some-workflow.md\`
`;

  fs.writeFileSync(path.join(skillDir, "GUIDE.md"), guideMd);

  if (fs.existsSync(ROUTING_FILE)) {
    const routing = fs.readFileSync(ROUTING_FILE, "utf-8");
    const newEntry = `| \`${name}\` | ${triggers.split(",")[0].trim()}, ... | \`${name}/GUIDE.md\` |`;
    const insertPoint = routing.lastIndexOf("\n| `");
    if (insertPoint !== -1) {
      const updated =
        routing.slice(0, insertPoint) +
        "\n" +
        newEntry +
        routing.slice(insertPoint);
      fs.writeFileSync(ROUTING_FILE, updated);
    }
  }

  console.log(`\nCreated: .cursor/skills/${name}/SKILL.md`);
  console.log(`Created: .cursor/skills/${name}/GUIDE.md`);
  if (fs.existsSync(ROUTING_FILE)) {
    console.log(`Updated: .cursor/skills/routing.yaml`);
  }
  console.log(
    `\nDone. Edit the SKILL.md and GUIDE.md files to add your steps and details.\n`
  );
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});

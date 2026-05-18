import fs from "node:fs";
import path from "node:path";

const requiredPaths = [
  "AGENTS.md",
  "CURSOR.md",
  ".cursor/rules",
  ".cursor/skills",
  "agents",
  "workflows",
  "memory",
  "tasks",
  "templates",
  "examples",
  "docs"
];

const checkOnly = process.argv.includes("--check");

let missing = [];

for (const item of requiredPaths) {
  if (!fs.existsSync(item)) {
    missing.push(item);
  }
}

if (checkOnly) {
  if (missing.length === 0) {
    console.log("Workspace check passed.");
    process.exit(0);
  }

  console.log("Missing paths:");
  for (const item of missing) {
    console.log(`- ${item}`);
  }
  process.exit(1);
}

for (const item of missing) {
  const ext = path.extname(item);
  if (ext) {
    fs.mkdirSync(path.dirname(item), { recursive: true });
    fs.writeFileSync(item, "");
  } else {
    fs.mkdirSync(item, { recursive: true });
  }
}

console.log("Cursor Agent Starter Kit workspace initialized.");
console.log("");
console.log("Open this folder in Cursor and ask:");
console.log("");
console.log("Read AGENTS.md and workflows/onboard.md. Summarize this project.");

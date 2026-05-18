import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = path.resolve(__dirname, "..");

const SKILLS_DIR = path.join(BASE, ".cursor", "skills");
const RULES_DIR = path.join(BASE, ".cursor", "rules");

const errors = [];
const warnings = [];

function checkFrontmatter(filePath, isRule = false) {
  const content = fs.readFileSync(filePath, "utf-8");
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!frontmatterMatch) {
    errors.push(`${filePath}: missing frontmatter (--- ... ---)`);
    return;
  }

  const fm = frontmatterMatch[1];
  const lines = fm.split(/\r?\n/);
  const hasDescription = lines.some((l) => l.trim().startsWith("description:"));
  const hasAlwaysApply = lines.some((l) => l.trim().startsWith("alwaysApply:"));
  const hasPriority = lines.some((l) => l.trim().startsWith("priority:"));
  const hasTags = lines.some((l) => l.trim().startsWith("tags:"));

  if (!hasDescription) {
    errors.push(`${filePath}: missing description in frontmatter`);
  }
  if (!hasAlwaysApply) {
    errors.push(`${filePath}: missing alwaysApply in frontmatter`);
  }
  if (isRule) {
    if (!hasPriority) {
      warnings.push(`${filePath}: missing priority in frontmatter`);
    }
    if (!hasTags) {
      warnings.push(`${filePath}: missing tags in frontmatter`);
    }
  }
}

function checkSkillFiles(skillDir) {
  const skillMd = path.join(skillDir, "SKILL.md");
  if (!fs.existsSync(skillMd)) {
    errors.push(`${skillDir}: missing SKILL.md`);
    return;
  }

  const skillContent = fs.readFileSync(skillMd, "utf-8");
  const hasPurpose = /##\s+Purpose/.test(skillContent);
  const hasWhenToUse =
    /##\s+When/.test(skillContent) ||
    skillContent.includes("## When to use") ||
    skillContent.includes("## Precondition") ||
    skillContent.includes("## Avoid");
  const hasSteps = /##\s+Steps/.test(skillContent);
  const hasOutput = /##\s+Output/.test(skillContent) || skillContent.includes("## Output format");

  if (!hasPurpose) errors.push(`${skillMd}: missing "## Purpose" section`);
  if (!hasWhenToUse) errors.push(`${skillMd}: missing "## When to use" section`);
  if (!hasSteps) errors.push(`${skillMd}: missing "## Steps" section`);
  if (!hasOutput) warnings.push(`${skillMd}: missing "## Output" section`);

  const lineCount = skillContent.split(/\r?\n/).length;
  if (lineCount > 120) {
    warnings.push(
      `${skillMd}: ${lineCount} lines (consider splitting into SKILL.md + GUIDE.md)`
    );
  }
}

function walkDir(dir, onFile) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name !== "node_modules") {
        walkDir(fullPath, onFile);
      }
    } else {
      onFile(fullPath);
    }
  }
}

// Check skills
walkDir(SKILLS_DIR, (filePath) => {
  if (filePath.endsWith("SKILL.md")) {
    checkSkillFiles(path.dirname(filePath));
  }
});

// Check rules
walkDir(RULES_DIR, (filePath) => {
  if (filePath.endsWith(".mdc")) {
    checkFrontmatter(filePath, true);

    const content = fs.readFileSync(filePath, "utf-8");
    const lineCount = content.split(/\r?\n/).length;
    if (lineCount > 150) {
      warnings.push(`${filePath}: ${lineCount} lines (consider condensing)`);
    }
  }
});

if (warnings.length > 0) {
  console.log("\nWarnings:");
  for (const w of warnings) {
    console.log(`  - ${w}`);
  }
}

if (errors.length > 0) {
  console.log("\nErrors:");
  for (const e of errors) {
    console.log(`  - ${e}`);
  }
  console.log("\nValidation FAILED.");
  process.exit(1);
}

console.log(`\nValidation PASSED.`);
if (warnings.length === 0) {
  console.log("All skills and rules are well-structured.");
}

import fs from "node:fs";
import path from "node:path";

const BASE = new URL(".", import.meta.url).pathname;
const SKILLS_DIR = path.join(BASE, ".cursor", "skills");

const errors = [];
const warnings = [];

function checkFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!frontmatterMatch) {
    errors.push(`${filePath}: missing frontmatter (--- ... ---)`);
    return;
  }

  const fm = frontmatterMatch[1];
  const lines = fm.split(/\r?\n/);
  const hasDescription = lines.some((l) => l.startsWith("description:"));
  const hasAlwaysApply = lines.some((l) => l.startsWith("alwaysApply:"));

  if (!hasDescription) {
    warnings.push(`${filePath}: missing description in frontmatter`);
  }
  if (!hasAlwaysApply) {
    errors.push(`${filePath}: missing alwaysApply in frontmatter`);
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
  const hasWhenToUse = /##\s+When/.test(skillContent);
  const hasSteps = /##\s+Steps/.test(skillContent);
  const hasOutput = /##\s+Output/.test(skillContent);

  if (!hasPurpose) errors.push(`${skillMd}: missing "## Purpose" section`);
  if (!hasWhenToUse && !skillContent.includes("## When to use")) {
    errors.push(`${skillMd}: missing "## When to use" section`);
  }
  if (!hasSteps) errors.push(`${skillMd}: missing "## Steps" section`);
  if (!hasOutput && !skillContent.includes("## Output")) {
    warnings.push(`${skillMd}: missing "## Output" section`);
  }

  const lineCount = skillContent.split(/\r?\n/).length;
  if (lineCount > 120) {
    warnings.push(
      `${skillMd}: ${lineCount} lines (consider splitting extended content into GUIDE.md)`
    );
  }

  // Check frontmatter only for .mdc rule files
  if (skillMd.endsWith(".mdc")) {
    checkFrontmatter(skillMd);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name !== "node_modules") {
        walkDir(fullPath);
      }
    } else if (entry.name === "SKILL.md") {
      const skillDir = path.dirname(fullPath);
      checkSkillFiles(skillDir);
    } else if (entry.name.endsWith(".mdc")) {
      checkFrontmatter(fullPath);
    }
  }
}

walkDir(SKILLS_DIR);

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
  console.log("\nSkill validation FAILED.");
  process.exit(1);
}

console.log(`\nSkill validation PASSED.`);
if (warnings.length === 0) {
  console.log("All skills are well-structured.");
}

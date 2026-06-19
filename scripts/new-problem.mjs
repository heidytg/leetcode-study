#!/usr/bin/env node
// Scaffold a new problem folder from templates/.
// Usage: node scripts/new-problem.mjs <number> <slug> [--fn name] [--title "Title"] [--langs py,go,ts,kt]
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TEMPLATES = join(ROOT, "templates");
const LANG_DIRS = { py: "python", go: "go", ts: "typescript", kt: "kotlin" };

const argv = process.argv.slice(2);
const positional = argv.filter((a) => !a.startsWith("--"));
const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};

const [numRaw, slug] = positional;
if (!numRaw || !slug) {
  console.error('Usage: npm run new -- <number> <slug> [--fn name] [--title "Title"] [--langs py,go,ts,kt]');
  process.exit(1);
}

const toCamel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const toTitle = (s) => s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const num = String(numRaw).padStart(4, "0");
const fn = flag("fn", toCamel(slug));
const tokens = {
  NUM: num,
  SLUG: slug,
  TITLE: flag("title", toTitle(slug)),
  FN: fn,
  FNUP: fn.charAt(0).toUpperCase() + fn.slice(1),
};
const langs = flag("langs", "py,go,ts").split(",").map((s) => s.trim()).filter(Boolean);

const sub = (text) => text.replace(/{{(\w+)}}/g, (_, k) => (k in tokens ? tokens[k] : `{{${k}}}`));

const dest = join(ROOT, "problems", `${num}-${slug}`);
if (existsSync(dest)) {
  console.error(`Already exists: ${dest}`);
  process.exit(1);
}
mkdirSync(dest, { recursive: true });

const copyTemplated = (src, dst) => {
  mkdirSync(dst, { recursive: true });
  for (const entry of readdirSync(src)) {
    const s = join(src, entry);
    const t = join(dst, entry);
    if (statSync(s).isDirectory()) copyTemplated(s, t);
    else writeFileSync(t, sub(readFileSync(s, "utf8")));
  }
};

for (const file of ["README.md", "tests.json"]) {
  writeFileSync(join(dest, file), sub(readFileSync(join(TEMPLATES, file), "utf8")));
}
for (const lang of langs) {
  const dir = LANG_DIRS[lang];
  if (!dir) {
    console.error(`Unknown lang "${lang}" (expected one of ${Object.keys(LANG_DIRS).join(", ")})`);
    continue;
  }
  copyTemplated(join(TEMPLATES, dir), join(dest, dir));
}

console.log(`Created problems/${num}-${slug} (${langs.join(", ")})`);
console.log(`Next: fill in tests.json from the LeetCode examples, then implement the solutions.`);

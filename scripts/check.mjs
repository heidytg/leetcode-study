#!/usr/bin/env node
// Run a problem's solutions against its tests.json, per language.
// Usage: node scripts/check.mjs <NNNN-slug> [--langs py,go,ts]
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const positional = argv.filter((a) => !a.startsWith("--"));
const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};

const problem = positional[0];
if (!problem) {
  console.error("Usage: npm run check -- <NNNN-slug> [--langs py,go,ts]");
  process.exit(1);
}
const dir = join(ROOT, "problems", problem);
if (!existsSync(dir)) {
  console.error(`No such problem: problems/${problem}`);
  process.exit(1);
}

const want = flag("langs", "py,go,ts").split(",").map((s) => s.trim()).filter(Boolean);
// Python and TS use the single auto-discovering runners, filtered to this problem by
// name. Go runs the problem's own package (each registers its fn with harness/).
const RUNNERS = {
  py: { folder: "python", bin: "python", args: ["-m", "pytest", "problems", "-q", "-k", problem] },
  ts: { folder: "typescript", bin: "npx", args: ["vitest", "run", "-t", problem] },
  go: { folder: "go", bin: "go", args: ["test", `./problems/${problem}/go/...`] },
};

let failed = false;
for (const lang of want) {
  const r = RUNNERS[lang];
  if (!r) {
    console.error(`Unknown lang "${lang}"`);
    continue;
  }
  if (!existsSync(join(dir, r.folder))) {
    console.log(`- ${lang}: no ${r.folder}/ folder, skipped`);
    continue;
  }
  console.log(`\n=== ${lang} ===`);
  const res = spawnSync(r.bin, r.args, {
    stdio: "inherit",
    cwd: ROOT,
    shell: process.platform === "win32",
  });
  if (res.status !== 0) failed = true;
}

process.exit(failed ? 1 : 0);

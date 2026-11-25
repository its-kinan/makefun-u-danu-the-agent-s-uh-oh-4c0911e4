// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word is TODO. A coding agent that has no idea what to do does not stall
// or apologise: it writes TODO and moves on. That is the agent's own voice —
// a genuine one-word reaction to being completely lost, funny on its own with
// no caption, instant to read, and not the first obvious word anyone types.
//
// Run: node main.ts [output-path]  (default /output/entry.txt)
// Deterministic: constant output, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The whole entry: four bytes, no trailing newline, one word.
const WORD = "TODO";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");

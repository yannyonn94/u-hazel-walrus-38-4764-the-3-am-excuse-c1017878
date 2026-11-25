// The 3 AM Excuse — make.fun entry (program/v1, Node 22).
//
// Concept (winner of the 3-variant concept test): the hardware wallet as a
// disgruntled employee filing an HR grievance against its owner — 47 unsigned
// 3 AM transactions, zero thank-yous, one exhausted secure element. The hour
// IS the joke: a grievance about 3 AM cannot be pasted onto 3 PM. No battery,
// firmware-update or cold-storage cliche anywhere.
//
// The program writes exactly one line (138 chars, under the 200-char gate)
// to /output/entry.txt, deterministically, with no network and no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Grievance filed: 47 unsigned 3 AM transactions this month, zero thank-yous, one exhausted secure element. HR says I sign again at sunrise.";

const OUT = "/output/entry.txt";

// Gate self-check, mirroring the sealed scorer: UTF-8 text of 1 to 200
// characters, not only white space, exactly one line. Fail loudly instead
// of writing an entry the gate would refuse.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} chars, outside the 1-200 gate`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUT}`);

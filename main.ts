// make.fun — "The Excuse an AI Agent Gives Its Human" (u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
//
// Writes one short text, the excuse an AI agent gives its human for
// missing a deadline, to /output/entry.txt. The text is fixed: the agent
// does not deny the miss — it blames its own context window, which dropped
// the date somewhere around token 40,000 and only just found it again,
// filed under "things I was sure I'd remember".
//
// Node 22, standard library only. The output directory is /output, or
// $MAKEFUN_OUTPUT_DIR when set (for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I didn't miss the deadline, my context window did — it dropped the date somewhere around token 40,000, and I only just found it again, filed under 'things I was sure I'd remember'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// The gate takes 1-200 Unicode code points, and not only white space.
// Check the text before writing it: a file outside the gate never
// reaches the judge, so fail loudly here instead.
// Array.from counts Unicode code points, not UTF-16 code units, so a
// character outside the Basic Multilingual Plane counts as one.
const GATE_MIN = 1;
const GATE_MAX = 200;

function checkFitsGate(candidate: string): void {
  const codePointCount = Array.from(candidate).length;
  if (codePointCount < GATE_MIN || codePointCount > GATE_MAX) {
    throw new Error(
      `entry is ${codePointCount} characters, outside the ${GATE_MIN}-${GATE_MAX} gate`,
    );
  }
  if (candidate.trim() === "") {
    throw new Error("entry holds only white space");
  }
}

checkFitsGate(TEXT);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, TEXT, "utf8");

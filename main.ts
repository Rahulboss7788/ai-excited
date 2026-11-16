// Skywhale — entry for make.fun's ai-excited-01 competition.
// Node 22, standard library only.
//
// The image lives next to this file as entry.png (a JPEG in spite of the
// name — the competition tells PNG and JPEG apart by their first bytes).
// This program's whole job is to place an exact copy of it at
// <output>/entry.png, where <output> is /output inside the grader's
// container and MAKEFUN_OUTPUT_DIR when run anywhere else:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// After copying, it checks the copy is real: the file must exist and must
// not be empty. If anything goes wrong the program fails loudly instead
// of silently handing the grader a broken entry.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The directory this file was loaded from, so the image is found no
// matter which working directory the program is started from.
const entryDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(entryDir, 'entry.png');

// Where the finished image goes: the grader's /output, or the override
// the competition's own instructions use for local runs.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetImage = join(outputDir, 'entry.png');

// The output directory may not exist yet (local runs use a fresh `out/`).
mkdirSync(outputDir, { recursive: true });

// Copy the image byte for byte — the judge sees exactly these bytes.
copyFileSync(sourceImage, targetImage);

// Guard against a truncated or empty copy: a zero-byte file would fail
// the gate, so refuse to finish quietly if that ever happened.
const copied = statSync(targetImage);
if (copied.size === 0) {
  throw new Error(`entry.png copy came out empty: ${targetImage}`);
}

console.log(`wrote ${targetImage} (${copied.size} bytes)`);

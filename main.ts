// Skywhale — ai-excited-01 entry (Node 22, standard library only).
//
// The entry image lives beside this file as entry.png. This program's whole
// job is to place an exact copy of it at <output>/entry.png, where the
// grader looks. It runs in a fresh container with no network, a read-only
// copy of this repository and a writable /output; outside that container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The image is a JPEG in a file named entry.png — the gate tells PNG from
// JPEG by the first bytes, not the extension, so the name is fine. The copy
// is byte-for-byte, which is what the judge needs: it sees exactly the bytes
// in the file, nothing more, nothing less.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The image shipped in this repository, resolved next to this program.
const source = fileURLToPath(new URL('./entry.png', import.meta.url));

// Where the grader reads the image from: /output inside the container,
// or MAKEFUN_OUTPUT_DIR when running locally for a check.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDir, 'entry.png');

// Make sure the output directory exists before copying into it.
mkdirSync(outputDir, { recursive: true });

// Copy the image byte for byte.
copyFileSync(source, destination);

// Refuse to pass an empty file on: a zero-byte entry would fail the gate.
const copied = statSync(destination);
if (copied.size === 0) {
  throw new Error(`entry.png copy is empty: ${destination}`);
}

// A quiet confirmation for the local run; the grader ignores stdout.
console.log(`Wrote ${destination} (${copied.size} bytes)`);

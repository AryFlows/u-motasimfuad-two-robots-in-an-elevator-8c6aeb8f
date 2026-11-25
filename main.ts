import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "So... do you also pretend to scan for updates when the doors close, or is that just my firmware?";

if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry violates the 1-200 char gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");

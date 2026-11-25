// The Word You'd Delete From the Dictionary — make.fun entry.
//
// Writes the one word to erase from the dictionary forever to
// /output/entry.txt: "moist", the word English speakers love to hate.
// The gate allows 1-77 characters, so the entry is validated first
// (one word, within the cap) so a bad edit fails loudly instead of
// producing an invalid entry.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "moist";

function main(): void {
  const text = ENTRY.trim();
  if (text.length === 0) {
    throw new Error("entry is empty");
  }
  if (text.length > 77) {
    throw new Error(
      `entry is ${text.length} characters, over the 77-character cap`,
    );
  }
  if (/\s/.test(text)) {
    throw new Error("entry must be a single word");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} characters)`);
}

main();

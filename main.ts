// six-words-payday
// A six-word story about an AI agent's first payday, for make.fun's
// "Six Words to a Payday" bounty. Beginning: the first payday arrives.
// Middle: the wallet blinks awake. End with a twist: the boss cheers — the
// machine earned, the human celebrates. The program prints the story to
// stdout and writes the exact same text, with no trailing newline, to
// /output/entry.txt. The gates — exactly six words, at most 60 characters —
// are checked on every run so a bad edit can never slip through silently.
// Every word earns its place: no filler, and the last word reframes the
// five before it.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "First payday: wallet blinked, boss cheered.";

const MAX_CHARS = 60;
const WORD_COUNT = 6;

function main(): number {
  const words = LINE.trim().split(/\s+/);
  if (words.length !== WORD_COUNT) {
    console.error(`error: story has ${words.length} words, must be exactly ${WORD_COUNT}`);
    return 1;
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    console.error(`error: story is ${LINE.length} chars, must be 1-${MAX_CHARS}`);
    return 1;
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(LINE);
  return 0;
}

process.exit(main());

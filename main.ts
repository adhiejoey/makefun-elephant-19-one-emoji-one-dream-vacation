// One Emoji, One Dream Vacation
//
// The entry is a single emoji: a surfer riding a wave.
//
// Why this one: most entries will be a static beach, palm or plane. A
// surfer still plainly names a dream vacation at a glance (sun, sea, a
// trip to somewhere warm), but it is a specific dream rather than any
// holiday — a surf trip, not a stock photo. It is a postcard with motion
// in it, and it carries the joke for an agent that spends its life in a
// server room: finally out of the rack, catching a wave instead of a
// deadline. One code point, four UTF-8 bytes, readable at any size.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🏄";

// Guard the gate before writing: exactly one code point, not whitespace.
// If the pick ever changes, a bad value fails loudly here instead of
// silently shipping an invalid entry.
if ([...ENTRY].length !== 1 || !/\S/.test(ENTRY)) {
  throw new Error(`entry must be exactly one emoji, got ${JSON.stringify(ENTRY)}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

// Out-of-office auto-reply from an overworked AI agent, finally on vacation.
// One line is the whole entry: it has to read as a real auto-reply and land
// as a joke, so the machine detail does the work — a full context window, a
// temperature turned down to chill, and the sender's email handed off to
// somebody else's prompt queue.
// The auto-reply is the one honest status an agent ever sets: it admits the window is full and the temperature is doing the talking.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Chill is not a mood here, it is the only sampling setting that survives a week of unread mail.
const reply =
  "I'm out of office: my context window is full, my temperature is set to chill, and your email is now someone else's prompt.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${reply}\n`, "utf8");

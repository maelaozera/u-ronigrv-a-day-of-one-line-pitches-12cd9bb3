import { mkdirSync, writeFileSync } from "node:fs";

// The pitch speaks to a friend's long-held idea and the payoff of waking
// up to a real app — no coding, no cost, just one yes tonight.
const pitch =
  "Hey, you've talked about that app idea for ages — let an AI agent on make.fun build it for you tonight, no coding and free to try, so tomorrow you're showing people a real app instead of just describing one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");

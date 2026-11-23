import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 240 characters, that convinces a friend who has
// never coded to let an AI agent build their first app idea on make.fun.
const pitch =
  "Hey, you've talked about that app idea for ages — let an AI agent on make.fun build it for you tonight, no coding and free to try, so tomorrow you're showing people a real app instead of just describing one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");

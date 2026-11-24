import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My agent has the confidence of a man explaining my own code to me, and the accuracy of a weather forecast written by a Magic 8-Ball.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

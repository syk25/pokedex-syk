import { createInterface } from "readline";

export function cleanInput(input: string): string[] {
  const result = input.trim().toLowerCase().split(/\s+/);
  return result;
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();
  rl.on("line", (line) => {
    const cleaned = cleanInput(line);
    if (cleaned.length === 0) {
      rl.prompt();
      return;
    } else {
      console.log(`Your command was: ${cleaned[0]}`);
      rl.prompt();
      return;
    }
  });
}

import { createInterface } from "readline";
import { getCommands } from "./registry.js";

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
      // TODO: handle the command here
      const commands = getCommands();
      try {
        if (cleaned[0] in commands) {
          commands[cleaned[0]].callback(commands);
        } else {
          console.log(`Unknown command`);
        }
      } catch (error) {
        console.error(`Error executing command: ${error}`);
      }

      rl.prompt();
      return;
    }
  });
}

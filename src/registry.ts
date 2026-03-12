import { commandExit } from "./commands/command_exit.js";
import { commandHelp } from "./commands/command_help.js";
import { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the pokedex",
      callback: commandExit,
    },
    // can add more commands here
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
  };
}

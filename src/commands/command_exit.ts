import type { State } from "../registry/state.js";

export async function commandExit(state: State) {
  console.log("Closing the Pokedex... Goodbye!");
  state.readline.close();
  state.pokeAPI.closeCache();
  process.exit(0);
}

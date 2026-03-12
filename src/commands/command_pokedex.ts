import type { State } from "../registry/state.js";

export async function commandPokedex(state: State) {
  const caughtPokemon = Object.values(state.caughtPokemon);

  if (caughtPokemon.length === 0) {
    console.log("You have not caught any Pokemon yet!");
    return;
  }

  console.log("Your Pokedex:");
  for (const pokemon of caughtPokemon) {
    console.log(` - ${pokemon.name}`);
  }
}

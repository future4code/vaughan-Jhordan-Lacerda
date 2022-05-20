import { Pokemon } from "./Pokemon";

export interface IPokeData {
  getAllPokemons(): Promise<Pokemon[]>;
  getPokemonByName(name: string): Promise<Pokemon>;
}

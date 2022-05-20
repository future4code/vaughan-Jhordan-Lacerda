import { Pokemon } from "./Pokemon";

export interface IPokeData {
  getAllPokemons(offSet: number): Promise<Pokemon[]>;
  getPokemonByName(name: string): Promise<Pokemon>;
  getPokemonsByType(type: string, offSet: number): Promise<Pokemon[]>;
}

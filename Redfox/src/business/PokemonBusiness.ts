import { Request } from "express";
import { BaseError } from "../error/BaseError";
import { IPokeData } from "../model/IPokeData";
import { Pokemon } from "../model/Pokemon";

export class PokemonBusiness {
  constructor(private iPokeData: IPokeData) {}

  async getAllPokemons(page: number): Promise<any> {
    if (page <= 0 || page >= 166) {
      throw new BaseError("Número de páginas inválido", 422);
    }

    const offSet: number = 5 * (page - 1);

    const getPokemons = await this.iPokeData.getAllPokemons(offSet);

    return getPokemons;
  }

  async getPokemonByName(name: string): Promise<Pokemon> {
    const getPokemon = await this.iPokeData.getPokemonByName(name);

    if (getPokemon === undefined) {
      throw new BaseError("Pokemon não encontrado", 404);
    }

    return getPokemon;
  }

  async getPokemonByType(type: string, pages: number): Promise<Pokemon[]> {
    const offSet: number = 5 * (pages - 1);

    const getPokemons = await this.iPokeData.getPokemonsByType(type, offSet);

    console.log(getPokemons);

    return getPokemons;
  }
}

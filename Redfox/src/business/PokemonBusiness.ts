import { Request } from "express";
import { BaseError } from "../error/BaseError";
import { IPokeData } from "../model/IPokeData";
import { Pokemon } from "../model/Pokemon";

export class PokemonBusiness {
  constructor(private iPokeData: IPokeData) {}

  async getAllPokemons(): Promise<any> {
    const getPokemons = await this.iPokeData.getAllPokemons();

    return getPokemons;
  }

  async getPokemonByName(name: string): Promise<Pokemon> {

    const getPokemon = await this.iPokeData.getPokemonByName(name);

    if(getPokemon === undefined){
      throw new BaseError("Pokemon não encontrado", 404);
    }

    console.log(getPokemon);

    return getPokemon;
  }
}

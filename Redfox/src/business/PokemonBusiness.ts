import { IPokeData } from "../model/IPokeData";

export class PokemonBusiness {
  constructor(private iPokeData: IPokeData) {}

  async pokemon(): Promise<any> {
    const getPokemon = await this.iPokeData.getAllPokemons();

    return getPokemon;
  }
}

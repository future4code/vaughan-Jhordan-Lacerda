import { BaseDatabase } from "./BaseDatabase";
import { IPokeData } from "../model/IPokeData";
import { Pokemon } from "../model/Pokemon";
import { BaseError } from "../error/BaseError";

export class PokemonDatabase extends BaseDatabase implements IPokeData {
  private TABLE_NAME = "Pokemon_Go";

  async getAllPokemons(): Promise<Pokemon[]> {
    const pokemons = await this.getConnection()
      .select("Name", "Type_1", "Type_2")
      .from(this.TABLE_NAME)
      .limit(5);

    return pokemons;
  }

  async getPokemonByName(name: string): Promise<Pokemon> {
    const pokemons = await this.getConnection()
      .select("name", "Type_1", "Type_2", "ATK", "DEF")
      .from(this.TABLE_NAME)
      .where({ name });
    return pokemons[0];
  }
}

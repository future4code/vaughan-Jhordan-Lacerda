import { BaseDatabase } from "./BaseDatabase";
import { IPokeData } from "../model/IPokeData";

export class PokemonDatabase extends BaseDatabase implements IPokeData {
  private TABLE_NAME = "Pokemon_Go";

  async getAllPokemons(): Promise<any[]> {
    const pokemon = await this.getConnection().from(this.TABLE_NAME).limit(5);

    return pokemon;
  }
}

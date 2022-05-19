import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class PokemonController {
  constructor(private pokemonBusiness: PokemonBusiness) {}

  async getAllPokemon(req: Request, res: Response): Promise<void> {
    try {
      const pokemon = await this.pokemonBusiness.pokemon();

      res.status(200).send({ pokemon });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}

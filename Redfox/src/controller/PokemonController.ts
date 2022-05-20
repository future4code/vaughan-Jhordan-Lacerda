import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BaseError } from "../error/BaseError";

export class PokemonController {
  constructor(private pokemonBusiness: PokemonBusiness) {}

  async getAllPokemon(req: Request, res: Response): Promise<void> {
    try {
      const pokemons = await this.pokemonBusiness.getAllPokemons();

      res.status(200).send({ pokemons });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async getPokemonByName(req: Request, res: Response): Promise<void> {
    try {
      const name = req.params.name as string;

      const pokemon = await this.pokemonBusiness.getPokemonByName(name);

      res.status(200).send({ pokemon });
    } catch (error) {
      if (error instanceof BaseError) {
        res.status(error.code).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ error: "Esse pokemon não existe" });
      }
    }

    await BaseDatabase.destroyConnection();
  }
}

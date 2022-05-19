import express, { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonController } from "../controller/PokemonController";
import { PokemonDatabase } from "../data/PokemonDatabase";

export const userRouter = express.Router();

const pokemonDatabase = new PokemonDatabase();
const pokemonBusiness = new PokemonBusiness(pokemonDatabase);
const pokemonController = new PokemonController(pokemonBusiness);

userRouter.get("/all", (req: Request, res: Response) =>
  pokemonController.getAllPokemon(req, res)
);

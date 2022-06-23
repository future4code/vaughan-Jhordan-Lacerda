import { IdGenerator } from "../services/IdGenerator/IdGenerator";
import { DogWalkInputDTO, Walk } from "./walk";

export interface IWalkData {
  getIndex(offset: number): Promise<Walk[]>;
  createWalk(id: string, input: DogWalkInputDTO, price: number): Promise<void>;
}

import { v4 } from "uuid";
import { IWalkData } from "../model/IIWalkData";
import { DogWalkInputDTO } from "../model/walk";
import { IdGenerator } from "../services/IdGenerator/IdGenerator";

export class WalkBusiness {
  constructor(private IWalkData: IWalkData) {}

  async getIndex(page: number): Promise<any> {
    const offset: number = 5 * (page - 1);

    const getIndexFromWalkData = await this.IWalkData.getIndex(offset);

    return getIndexFromWalkData;
  }

  async createWalk(input: DogWalkInputDTO): Promise<any> {
    let price: number;
    if (input.duration === "30") {
      if (input.numberOfPets === 1) {
        price = 25;
      } else {
        price = 25 + 15 * (input.numberOfPets - 1);
      }
    } else if (input.duration === "60") {
      if (input.numberOfPets === 1) {
        price = 35;
      } else {
        price = 35 + 20 * (input.numberOfPets - 1);
      }
    }

    const postCreateWalkFromWalkData = await this.IWalkData.createWalk(
      v4(),
      input,
      price
    );

    return { message: "Passeio criado com sucesso" };

    return postCreateWalkFromWalkData;
  }
}

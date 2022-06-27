import { v4 } from "uuid";
import { IWalkData } from "../model/IIWalkData";
import { DogWalkInputDTO } from "../model/walk";

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
  }

  async startWalk(walkId: string): Promise<any> {
    const walk = await this.IWalkData.getWalkById(walkId);

    await this.IWalkData.insertStatustWalk(walkId, "FAZENDO");

    return { message: "Passeio iniciado com sucesso!" };
  }

  async finishWalk(walkId: string): Promise<any> {
    const walk = await this.IWalkData.getWalkById(walkId);

    await this.IWalkData.insertStatustWalk(walkId, "FEITO");

    return { message: "Passeio concluído com sucesso!" };
  }

}

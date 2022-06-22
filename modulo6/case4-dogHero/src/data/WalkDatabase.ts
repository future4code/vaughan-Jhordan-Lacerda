import { IWalkData } from "../model/IIWalkData";
import { Walk } from "../model/walk";
import { BaseDataBase } from "./BaseDataBase";

export class WalkDatabase extends BaseDataBase implements IWalkData {
  private TABLE_NAME = "PetWalk";
  private SECOND_TABLE_NAME = "Pets";

  async getIndex(offset: number): Promise<Walk[]> {
    const index = await this.connection()
      .select("*")
      .from(this.TABLE_NAME)
      .join(this.SECOND_TABLE_NAME, "PetWalk.id", "=", "Pets.id")
      .limit(5)
      .offset(offset);

    return index;
  }
}

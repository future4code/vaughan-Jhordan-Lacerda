import { IWalkData } from "../model/IIWalkData";
import { DogWalkInputDTO, Walk } from "../model/walk";
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

  async createWalk(
    id: string,
    input: DogWalkInputDTO,
    price: number
  ): Promise<void> {
    const newWalk = await this.connection()
      .insert({
        id: id,
        date_schedule: input.appointmentDate,
        price: price,
        latitude: input.latitude,
        longitude: input.longitude,
        duration: input.duration,
        start_date: input.startTime,
        end_date: input.endTime,
      })
      .into(this.TABLE_NAME);
  }

  async getWalkById(id: string): Promise<Walk[]> {
    const walk = await this.connection()
      .select()
      .from(this.TABLE_NAME)
      .where("id", "=", `${id}`);

    if (!walk[0]) {
      throw new Error("Passeio não encontrado pelo id informado");
    }

    return walk[0];
  }

  async insertStatustWalk(id: string, status: string): Promise<void> {
    await this.connection.raw(
      `UPDATE ${this.TABLE_NAME} SET status = '${status}' WHERE id = '${id}'`
    );
  }
}

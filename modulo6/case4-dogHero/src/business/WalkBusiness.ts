import { IWalkData } from "../model/IIWalkData";

export class WalkBusiness {
  constructor(private IWalkData: IWalkData) {}

  async getIndex(page: number): Promise<any> {
    const offset: number = 5 * (page - 1);

    const getIndexFromWalkData = await this.IWalkData.getIndex(offset);

    return getIndexFromWalkData;
  }
}

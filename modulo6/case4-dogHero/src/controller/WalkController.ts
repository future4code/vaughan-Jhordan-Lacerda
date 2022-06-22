import { Request, Response } from "express";
import { WalkBusiness } from "../business/WalkBusiness";

export class WalkController {
  constructor(private WalkBusiness: WalkBusiness) {}

  async getIndex(req: Request, res: Response): Promise<void> {
    try {
      const { page } = req.query;

      const walks = await this.WalkBusiness.getIndex(Number(page));

      res.status(200).send({ walks });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }
}

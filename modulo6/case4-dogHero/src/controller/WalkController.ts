import { Request, Response } from "express";
import { WalkBusiness } from "../business/WalkBusiness";
import { DogWalkInputDTO } from "../model/walk";

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

  async createWalk(req: Request, res: Response): Promise<void> {
    try {
      const input: DogWalkInputDTO = {
        appointmentDate: req.body.appointmentDate,
        duration: req.body.duration,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        pets: req.body.pets,
        numberOfPets: req.body.numberOfPets,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
      };

      if (
        !input.appointmentDate ||
        !input.duration ||
        !input.latitude ||
        !input.longitude ||
        !input.pets ||
        !input.numberOfPets ||
        !input.startTime ||
        !input.endTime
      ) {
        throw new Error(
          "Os campos 'appointmentDate', 'price', 'duration', 'latitude', 'longitude', 'pets', 'numberOfPets', 'startTime', 'endTime' são obrigatórios!"
        );
      }

      const walkCreated = await this.WalkBusiness.createWalk(input);

      res.status(200).send({ walkCreated });
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }

  async startWalk(req: Request, res: Response): Promise<void>{
    try {
      const {walkId} = req.body;

      const result = await this.WalkBusiness.startWalk(walkId);

      res.status(200).send(result);
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }

  async finishWalk(req: Request, res: Response): Promise<void>{
    try {
      const {walkId} = req.body;

      const result = await this.WalkBusiness.finishWalk(walkId);

      res.status(200).send(result);
    } catch (error) {
      if (error instanceof Error)
        res.status(400).send({ error: error.message });
    }
  }
}

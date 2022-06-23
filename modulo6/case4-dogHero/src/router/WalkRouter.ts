import express, { Request, Response } from "express";
import { WalkBusiness } from "../business/WalkBusiness";
import { WalkController } from "../controller/WalkController";
import { WalkDatabase } from "../data/WalkDatabase";

export const WalkRouter = express.Router();

const walkDatabase = new WalkDatabase();
const walkBusiness = new WalkBusiness(walkDatabase);
const walkController = new WalkController(walkBusiness);

WalkRouter.get("/index", (req: Request, res: Response) =>
  walkController.getIndex(req, res)
);

WalkRouter.post("/create-walk", (req: Request, res: Response) =>
  walkController.createWalk(req, res)
);

import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

const updateActorSalary = async (id: string, salary: number): Promise<void> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where({ id: id });
};

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where({ id: id });
};

const avgSalary = async (gender: string): Promise<void> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const actor = await connection("Actor").select().where({ id: req.params.id});

    res.status(200).send(actor);
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await connection("Actor")
    .count("*")
    .where({gender: req.query.gender})

    res.status(200).send(count)
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
})

app.put("/actor/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    updateActorSalary(req.params.id, 4400);

    res.status(200).send("Salário do ator alterado com sucesso!");
  } catch (e: any) {
    res.status(500).send(e.sqlMessage || e.message);
  }
});

app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    deleteActor(req.params.id);

    res.status(200).send("Ator deletado com sucesso!");
  } catch (e: any) {
    res.status(500).send(e.sqlMessage || e.message);
  }
});

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in https://localhost:${address.port}`);
  } else {
    console.error(`Server is not running in https://localhost`);
  }
});

import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import connection from "./connection";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());

const createUser = async (name: string, nickname: string, email: string) => {
  await connection("Users").insert({
    id: Date.now(),
    name: name,
    nickname: nickname,
    email: email,
  });
};

function FormatStringData(data: string) {
  const dia  = data.split("/")[0];
  const mes  = data.split("/")[1];
  const ano  = data.split("/")[2];

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
  // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}

const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: string
) => {
  await connection("Task").insert({
    task_id: Date.now(),
    title: title,
    description: description,
    limit_date: limitDate,
    creator_user_id: creatorUserId,
  });
};

const searchUser = async (id: string) => {
  const result = await connection("Users")
    .select("id", "nickname")
    .where({ id: id });
  return result;
};

const editUser = async (id: string, name: string, nickname: string) => {
  await connection("Users")
    .update({
      name: name,
      nickname: nickname,
    })
    .where({ id: id });
};

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const user = await searchUser(id);

    if (!user) {
      res.status(404).send("User não encontrado");
    } else {
      res.status(200).send(user);
    }
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

app.post("/user", async (req: Request, res: Response) => {
  try {
    const name: string = req.body.name;
    const nickname: string = req.body.nickname;
    const email: string = req.body.email;

    if (!name || !nickname || !email) {
      res
        .status(422)
        .send(
          "Você esqueceu de passar algum parâmetro no body (name, nickname ou email)"
        );
    } else {
      await createUser(name, nickname, email);

      res.status(201).send("Usuário criado com sucesso!");
    }
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

app.post("/task", async (req: Request, res: Response) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    let limitDate = req.body.limitDate;
    const creatorUserId = req.body.creatorUserId

    limitDate = FormatStringData(limitDate);

    createTask(title, description, limitDate, creatorUserId);

    res.status(201).send("Tarefa criada com sucesso!");
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
})

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const name: string = req.body.name;
    const nickname: string = req.body.nickname;

    if (!name || !nickname) {
      res.status(422).send("Algum parâmetro esquecido (name ou nickname)");
    } else {
      editUser(id, name, nickname);

      res.status(200).send("User editado com sucesso!");
    }
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

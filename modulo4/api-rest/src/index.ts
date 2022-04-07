import * as express from "express";
import * as cors from "cors";
import { AddressInfo } from "net";

import { user, users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req: express.Request, res: express.Response) => {
  try {
    const type = req.query.type as string;

    const filterUsers = users.filter((user) => {
      return user.type === type.toUpperCase();
    });

    res.status(200).send(filterUsers);
  } catch (error) {
    res.status(422).send({ message: error.message });
  }
});

app.get("/users", (req: express.Request, res: express.Response) => {
  res.status(200).send(users);
});

app.get("/users/:name", (req: express.Request, res: express.Response) => {
  try {
    const name = req.params.name;

    let userFound = false;

    for (let i = 0; i < users.length; i++) {
      if (name === users[i].name) {
        userFound = true;
        res.status(200).send(users[i]);
      }
    }

    if (!userFound) {
      throw new Error("Usuário não encontrado");
    }
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

app.post("/users", (req: express.Request, res: express.Response) => {
    const { name, email, type, age } = req.body;

    const newUser: user = {
      id: Number(Date.now()),
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send(users);
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const addres = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${addres.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
});

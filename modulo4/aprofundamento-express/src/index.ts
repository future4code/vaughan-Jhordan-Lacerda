import * as express from "express";
import * as cors from "cors";
import { aFazeres } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/toDo", (req, res) => {
  const query = req.query.doneOrNot;
  const toDo = aFazeres;
  const toDoList = toDo.filter((task) => {
    return String(task.completed) === query;
  });

  res.send(toDoList);
});

app.post("/toDo/create", (req, res) => {
  const toDo = aFazeres;
  const title = req.body.title;
  const completed = req.body.completed;

  const newToDo = {
    userId: Date.now(),
    id: Date.now(),
    title: title,
    completed: completed,
  };

  toDo.push(newToDo);

  res.send(toDo);
});

app.put("/toDo/editCompleted/:userId/:id", (req, res) => {
  const toDo = aFazeres;
  const idUser = Number(req.params.userId);
  const toDoId = Number(req.params.id);

  const toDoList = toDo
    .filter((task) => {
      return task.userId === idUser && task.id === toDoId;
    })
    .map((task) => {
      task.completed = !task.completed;
      return task;
    });

  res.send(toDoList);
});

app.get("/toDo/:userId", (req, res) => {
  const toDo = aFazeres;
  const userId = Number(req.params.userId);

  const userToDoList = toDo.filter((task) => {
    return task.userId === userId;
  });

  res.send(userToDoList);
});

app.delete("/toDo/:id", (req, res) => {
  const toDo = aFazeres;
  const toDoId = Number(req.params.id);

  toDo.splice(toDoId, 1);

  res.send(toDo);
});

app.listen(3003, () => {
  console.log("Backend rodando na porta 3003");
});

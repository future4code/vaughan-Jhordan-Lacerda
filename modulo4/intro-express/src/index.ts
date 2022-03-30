import * as express from "express";
import * as cors from "cors";
import { users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Backend funcionando!");
});

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/users", (req, res) => {
  const allUsers = users;

  const resultUser = allUsers.flat(1);

  res.status(200).send(resultUser);
});

app.get("/posts", (req, res) => {
  const allUsers = users;

  const resultPosts = allUsers
    .map((user) => {
      return user.posts;
    })
    .flat(1);

  res.status(200).send(resultPosts);
});

app.get("/post", (req, res) => {
  const allUsers = users;

  const getUserPostById = allUsers.filter((user) => {
    return Number(req.query.userId) === user.id;
  }).map((user) => {
   return user.posts
  }).flat(2);

  res.status(200).send(getUserPostById)
});

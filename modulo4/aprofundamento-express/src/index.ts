import * as express from "express";
import * as cors from "cors";
import { aFazeres } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("pong");
});



app.listen(3003, () => {
  console.log("Backend rodando na porta 3003");
});

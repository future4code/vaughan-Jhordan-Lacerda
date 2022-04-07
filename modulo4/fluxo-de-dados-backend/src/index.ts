import * as express from "express";
import * as cors from "cors";
import { product } from "./types";
import { productsList } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).send("Api funcionando");
});

app.get("/products", (req, res) => {
  const listProduct: Array<product> = productsList;

  res.status(200).send(listProduct);
});

app.post("/add-product", (req, res) => {
  try {
    const listProduct: Array<product> = productsList;
    const newProduct: product = {
      id: Date.now().toString(),
      name: req.body.name.trim(),
      price: req.body.price,
    };

    if (!newProduct.name) {
      throw new Error("Campo 'name' não definido");
    }

    if (!newProduct.price) {
      throw new Error("Campo 'price' não definido");
    }

    if (typeof newProduct.name !== "string") {
      throw new Error("O valor de 'name' deve ser uma string");
    }

    if (typeof newProduct.price !== "number") {
      throw new Error("O valor de 'price' deve ser um number");
    }

    if (newProduct.price <= 0) {
      throw new Error(
        "O campo 'price' não pode receber um valor nulo ou menor que zero"
      );
    }

    for (let i: number = 0; i < listProduct.length; i++) {
      if (
        newProduct.name.toLowerCase().trim() ===
        listProduct[i].name.toLowerCase().trim()
      ) {
        throw new Error("Esse produto já existe na nossa base de dados!");
      }
    }

    listProduct.push(newProduct);

    res.status(201).send(listProduct);
  } catch (e: any) {
    switch (e.message) {
      case "Campo 'name' não definido":
        res.status(422).send(e.message);
        break;
      case "Campo 'price' não definido":
        res.status(422).send(e.message);
        break;
      case "O valor de 'name' deve ser uma string":
        res.status(422).send(e.message);
        break;
      case "O campo 'price' não pode receber um valor nulo ou menor que zero":
        res.status(422).send(e.message);
        break;
      case "Esse produto já existe na nossa base de dados!":
        res.status(422).send(e.message);
        break;
      default:
        res.status(500).send(e.message);
        break;
    }
  }
});

app.put("/products/:id/edit-price", (req, res) => {
  try {
    const listProduct: Array<product> = productsList;
    const productId: string = req.params.id;
    const productNewPrice: number = Number(req.body.newPrice);

    if (!productNewPrice) {
      throw new Error("Campo 'newPrice' não definido");
    }

    //erro caso price seja diferente de number: Ele só está caindo no primeiro if
    if (productNewPrice === NaN) {
      throw new Error("Campo 'newPrice' deve ser do tipo number");
    }
    //- erro caso algo inesperado aconteça: Ele só está caindo no primeiro if
    if (productNewPrice <= 0) {
      throw new Error("O campo 'newPrice' deve ser maior que zero");
    }

    for (let i: number = 0; i < listProduct.length; i++) {
      if (productId === listProduct[i].id) {
        listProduct[i].price = productNewPrice;
      } else {
        throw new Error("Produto não encontrado");
      }
    }

    res.status(200).send(listProduct);
  } catch (e: any) {
    switch (e.message) {
      case "Campo 'newPrice' não definido":
        res.status(422).send(e.message);
        break;
      case "Campo 'newPrice' deve ser do tipo number":
        res.status(422).send(e.message);
        break;
      case "O campo 'newPrice' deve ser maior que zero":
        res.status(422).send(e.message);
        break;
      case "Produto não encontrado":
        res.status(422).send(e.message);
        break;
      default:
        res.send(500).send(e.message);
        break;
    }
  }
});

app.delete("/product/:id", (req, res) => {
  try {
    const listProduct: Array<product> = productsList;
    const productId: string = req.params.id;

    let productFound = false;

    for (let i = 0; i < listProduct.length; i++) {
      if (productId === listProduct[i].id) {
        listProduct.splice(i, 1);
        productFound = true;
      }
    }

    if (!productFound) {
      throw new Error("Produto não encontrado");
    }

    res.status(200).send(listProduct);
  } catch (e) {
    switch (e.message) {
      case "Produto não encontrado":
        res.status(422).send(e.message);
        break;
      default:
        res.status(500).send(e.message);
        break;
    }
  }
});

app.listen(3003, () => {
  console.log("Backend rodando na porta 3003");
});

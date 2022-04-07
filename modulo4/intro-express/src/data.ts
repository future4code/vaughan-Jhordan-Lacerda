import { user } from "./variavelDeTipo";

//Acho melhor criar o array de posts dentro do array do user porque não faz sentido ter um array de posts largados,
//se bem que tem o user id, mas eu acho que fica mais organizado dessa forma.

export const users: Array<user> = [
  {
    id: 1,
    name: "Jhordan",
    email: "jhordan.eu@gmail.com",
    phone: 999127469,
    website: "www.jhordan.com",
    posts: [
      {
        id: 1,
        title: "Titulo",
        body: "Salve, fml",
        userId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Hiago",
    email: "Hiago.eu@gmail.com",
    phone: 99931294,
    website: "www.hiago.com",
    posts: [
      {
        id: 1,
        title: "Tituloo",
        body: "Salve, familia",
        userId: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Silvia",
    email: "Silvia.eu@gmail.com",
    phone: 9993121394,
    website: "www.silvia.com",
    posts: [
      {
        id: 1,
        title: "Titulooo",
        body: "Salve, fmlll",
        userId: 3,
      },
    ],
  },
];

export const exercicio1 = (): void => {
  //a) Quando atribuo um número a variável ele dá um erro de tipo (O tipo 'number' não pode ser atribuído ao tipo 'string')

  const minhaString: string = "alo";

  //b) Usamos o Union Type para fazer uma variável poder assumir mais de um tipo.

  const meuNumero: number | string = 14;

  //d)

  enum coresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta",
  }

  //c)

  type Pessoa = { nome: string; idade: number; corFavorita: string };

  const person: Pessoa = {
    nome: "Jhordan",
    idade: 19,
    corFavorita: coresArcoIris.AZUL,
  };
  const person2: Pessoa = {
    nome: "Silvia",
    idade: 44,
    corFavorita: coresArcoIris.VERMELHO,
  };
  const person33: Pessoa = {
    nome: "Hiago",
    idade: 10,
    corFavorita: coresArcoIris.VERDE,
  };
  const person44: Pessoa = {
    nome: "Sabrina",
    idade: 19,
    corFavorita: coresArcoIris.AZUL,
  };
};

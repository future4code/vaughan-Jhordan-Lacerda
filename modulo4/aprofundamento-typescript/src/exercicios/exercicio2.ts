//a) A entrada é um array de números e a saída é um objeto com as propriedades maior, menor e media.

export const exercicio2 = () => {
  function obterEstatisticas(numeros: number[]): object {
    const numerosOrdenados: number[] = numeros.sort(
      (a: number, b: number) => a - b
    );

    let soma = 0;

    for (let num of numeros) {
      soma += num;
    }

    const estatisticas: { maior: number; menor: number; media: number } = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length,
    };

    return estatisticas;
  }

  //c)
  type AmostraDeDados = {
    numeros: number[];
    obterEstatisticas: (numeros: number[]) => {};
  };

  const amostraDados: AmostraDeDados = {
    numeros: [1, 2, 3, 4, 5, 6],
    obterEstatisticas: function (numeros: number[]): {} {
      return obterEstatisticas(numeros);
    },
  };
};

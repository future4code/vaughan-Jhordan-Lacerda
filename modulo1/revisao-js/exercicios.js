// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) =>{
        if(a > b){
            return 1;
        } else if(a < b){
            return -1;
        }
    });
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayNumerosPares = []

    for(let num of array){
      if(num % 2 === 0){
        arrayNumerosPares.push(num);
      }
  }
  return arrayNumerosPares
}

//fiz o exercício 4 sem ler o desafio e quando fui ver o desafio, era exatamente o que eu tinha feito KKKKKKKK

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayNumerosPares = []

    for(let num of array){
      if(num % 2 === 0){
        arrayNumerosPares.push(Math.pow(num, 2));
      }
  }
  return arrayNumerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity;

    for(let i = 0; i < array.length; i++){
      if(maiorNumero < array[i]){
          maiorNumero = array[i];
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeroMaior = -Infinity;
    let numeroMenor = +Infinity;

    if(num1 >= num2) {
        numeroMaior = num1;
        numeroMenor = num2;
    } else if(num2 >= num1) {
        numeroMaior = num2;
        numeroMenor = num1;
    }

    const objetoNumeros = {
        maiorNumero: numeroMaior,
        maiorDivisivelPorMenor: numeroMaior % numeroMenor === 0,
        diferenca: numeroMaior - numeroMenor
    }

    return objetoNumeros;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const arrayNumerosPares = [];

   for(let i = 0; arrayNumerosPares.length < n; i++){
       if(i % 2 === 0){
           arrayNumerosPares.push(i);
       }
   }
   return arrayNumerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC){
        return "Equilátero";
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles";
    } else if(ladoA !== ladoB && ladoA !== ladoC){
        return "Escaleno";
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const atores = [];

    for(let ator of filme.atores){
        atores.push(ator);
    }

    const mensagem = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores.join(", ")}.`;
    return mensagem
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {
       ...pessoa,
       nome: "ANÔNIMO"
   }

   return pessoaAnonima;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = [];

    for(let pessoa of pessoas){
        if(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5){
            pessoasAutorizadas.push(pessoa);
        }
    }
    return pessoasAutorizadas  
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = [];

    for(let pessoa of pessoas){
        if(pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5){
            pessoasNaoAutorizadas.push(pessoa);
        }
    }
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
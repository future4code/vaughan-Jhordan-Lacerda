//Exercícios de interpretação de código

/**
 * 1°) O código está declarando uma variável valor e criando um laço que incrementa a variável valor com ela própria 
 *     + a variável de controle do laço e ao final do laço imprime a variável valor.
 *     O resultado impresso é 10;
 * 
 * 2°) a) Será impresso: 19, 21, 23, 25, 27, 30
 *     b) Sim. 
 *      for(numero of array){
        
        console.log(array.indexOf(numero));
    }
 * 
 * 3°) *
       **
       ***
       ****
 */

//Exercícios de escrita de código

//1°)
// const quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"));

// const arrayNomePets = [];

// for(let i = 0; i < quantidadePets; i++){
//     if(quantidadePets === 0){
//         console.log("Que pena! Você pode adotar um pet!");
//         break;
//     } else if(quantidadePets > 0) {
//         let nomeDoPet = prompt("Que legal, me diz o(s) nome(s) do(s) pet(s):");
//         arrayNomePets.push(nomeDoPet);
//     }
// }

// console.log(arrayNomePets);


//2°)
//const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

//a)
// const imprimirValoresArrayOriginal = (array) => {
//     for(numero of array){
//         console.log(numero);
//     }
// }

// imprimirValoresArrayOriginal(arrayOriginal);

//b)
// const imprimirValoresDivididos = (array) => {
//     for(numero of array){
//         numeroDividido = numero / 10;
//         console.log(numeroDividido);
//     }
// }

// imprimirValoresDivididos(arrayOriginal);

//c)
// const criarNovaArrayPar = (array) => {
//     const novaArray = [];
//     for(numero of array){
//         if(numero % 2 === 0){
//             novaArray.push(numero);
//         }
//     }
//     console.log(novaArray);
// }

// criarNovaArrayPar(arrayOriginal);

//d)
// const arrayComIndiceEElementos = (array) => {
//     const novaArray = [];

//     for(numero of array){
        
//         let index = array.indexOf(numero);
//         let numeroDaArray = numero;
//         let mensagem = `O elemento do index ${index} é ${numeroDaArray}`;
//         novaArray.push(mensagem);
//     }
//     console.log(novaArray);
// }

// arrayComIndiceEElementos(arrayOriginal)


//e)
// const menorEMaiorDoArray = (array) => {
//     let valorMaximo = 1;
//     let valorMinimo = 22;

//     for(numero of array){
//         if(valorMaximo < numero){
//             valorMaximo = numero;
//         }
//         if(valorMinimo > numero){
//             valorMinimo = numero;
//         }
//     }
//     console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`);
// }

// menorEMaiorDoArray(arrayOriginal);

//DESAFIOS

//1°)
// const numeroEscolhido = Number(prompt("Let´s play"));
// let numeroChutado = Number(prompt("Diga seu chute:"));

// for(let i = 1; i < 100; i++){
//       if(numeroChutado > numeroEscolhido){
//             console.log(`Seu chute foi: ${numeroChutado}`);
//             console.log("Errou, errou feio, errou rude, é menor!");
//             numeroChutado = Number(prompt("Diga seu chute:"));
//       } else if(numeroChutado < numeroEscolhido){
//             console.log(`Seu chute foi: ${numeroChutado}`);
//             console.log("Errrrrrrooooouuuu, é maior!");
//             numeroChutado = Number(prompt("Diga seu chute:"));
//       } else if(numeroChutado === numeroEscolhido){
//             console.log(`Seu chute foi: ${numeroChutado}`);
//             console.log("Acertô, miserevi");
//             console.log(`O número de tentativas foi ${i}`);
//             break;
//       }
// }


//2°)
// const numeroSorteado = Math.floor((Math.random() * 100) + 1);
// let numeroChutado = Number(prompt("Diga seu chute:"));

// for(let i = 1; i < 100; i++){
//       if(numeroChutado > numeroSorteado){
//             console.log(`Seu chute foi: ${numeroChutado}`);
//             console.log("Errou, errou feio, errou rude, é menor!");
//             numeroChutado = Number(prompt("Diga seu chute:"));
//       } else if(numeroChutado < numeroSorteado){
//             console.log(`Seu chute foi: ${numeroChutado}`);
//             console.log("Errrrrrrooooouuuu, é maior!");
//             numeroChutado = Number(prompt("Diga seu chute:"));
//       } else if(numeroChutado === numeroSorteado){
//             console.log(`Seu chute foi: ${numeroChutado}`);
//             console.log("Acertô, miserevi");
//             console.log(`O número de tentativas foi ${i}`);
//             break;
//       }
// }

//Sim, foi fácil fazer a alteração, acho que não poderia ser mais fácil, 
//pois eu apenas declarei uma variável que armazena o número aleatório, ao invés de declarar uma que receberia do usuário
//e depois só tive que mudar o nome da variável nos ifs.
//Exercícios de interpretação de código

/*
1°)a) Vai ser impresso o 10 e o 50.
b) Só iria realizar a operação e nada seria mostrado no console.

2°)a) A função vai capturar um texto e vai retornar ele com todas as letra minúsculas e 
      vai retornar se no texto capturado foi encontrada a palavra cenoura. Ela serve para dizer se no texto tem a palavra cenoura.
    b) i-true
       ii- true
       iii - true   
*/     

//Exercícios de escrita de código

//PRIMEIRA QUESTÃO

//a)
// let fraseSobreMim = () => {
//     console.log("Eu sou Jhordan, tenho 19 anos, moro em Campo Alegre de Lourdes e sou estudante");

// } 

// fraseSobreMim()

//b) 
// let fraseSobreMim = (nome, idade, cidade, profissao) => {

//     return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao} `);
// }

// const nome = prompt("Digite o seu nome:");
// const idade = Number(prompt("Digite sua idade:"));
// const cidade = prompt("Digite onde você mora:");
// const profissao = prompt("Digite qual a sua profissão:");

// fraseSobreMim(nome, idade, cidade, profissao);


//SEGUNDA QUESTÃO

//a)
// let Somar = (num1, num2) => {
//     const soma = num1 + num2;

//     return console.log(soma);
// }

// const num1 = Number(prompt("Digite um número:"));
// const num2 = Number(prompt("Digite um segundo número:"));

// Soma(num1, num2);

//b)
// let verificarNumero = (num1, num2) => {
    
//     return console.log(num1 >= num2);
// }

// const num1 = Number(prompt("Digite um número:"));
// const num2 = Number(prompt("Digite um segundo número:"));

// verificarNumero(num1, num2);

//c)
// let verificararPar = num => {
//     const resultado = num % 2 === 0;

//     return console.log(resultado);
// }

// const num1 = Number(prompt("Digite um número:"));

// parOuNao(num1);

//d)
// let receberMensagem = frase => {
//     console.log(frase.length);
//     console.log(frase.toUpperCase());

// }

// const frase = prompt("Digite uma frase:");

// receberMensagem(frase);


//TERCEIRA QUESTÃO

// let somarNumeros = (num1, num2) => {
//     const soma = num1 + num2;

//     return console.log(`Soma: ${soma}`);
// }

// let subtrairNumeros = (num1, num2) => {
//     const subtracao = num1 - num2;

//     return console.log(`Subtração: ${subtracao}`);
// }

// let multiplicarNumeros = (num1, num2) => {
//     const multplicacao = num1 * num2;

//     return console.log(`Multiplicação: ${multplicacao}`);
// }

// let dividirNumeros = (num1, num2) => {
//     const divisao = num1 / num2;

//     return console.log(`Divisão: ${divisao}`);
// }

// const num1 = Number(prompt("Digite um número:"));
// const num2 = Number(prompt("Digite o segundo número:"));

// somarNumeros(num1, num2);
// subtrairNumeros(num1, num2);
// multiplicarNumeros(num1, num2);
// dividirNumeros(num1, num2);


//DESAFIO

//Primeira questão

//a)
// let funcao = paramentro => {
//   console.log(paramentro);
// }

//b)
// let somarNumeros = (num1, num2) => {
//   soma = num1 + num2;
//   funcao(soma);
// }

// const num1 = Number(prompt("Digite um número:"));
// const num2 = Number(prompt("Digite um segundo número:"));

// somarNumeros(num1, num2);


//Segunda questão

// let pitagoras = (catOp, catAdj) => {
//   const hipo = Math.sqrt(Math.pow(catOp, 2) + Math.pow(catAdj, 2));

//   return console.log(hipo);
// }

// const catOp = Number(prompt("Digite o catato oposto:"));
// const catAdj = Number(prompt("Digite o cateto adjacente:"));

// pitagoras(catOp, catAdj);

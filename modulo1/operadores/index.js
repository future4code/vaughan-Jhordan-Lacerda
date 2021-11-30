/*
INTERPRETAÇÃO DE CÓDIGO

1°) a. false
    b. false
    c. true
    d. boolean

2°) Será impresso no console a concatenação dos números e não a sua soma, 
    pois os números estão sendo capturados como do tipo String e não como do tipo número.

3°) Sugiro que ele faça a tranformação do tipo String para ao tipo Number, usando o comando Number();
    Dessa forma: let primeiroNumero = Number(prompt("Digite um numero!"));
*/

//Exercícios de escrita de código

//Primeira Questão

// const idade = Number(prompt("Quantos anos você tem?"));
// const idade2 = Number(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?"));

// const condicao = idade >= idade2;

// console.log("Sua idade é maior do que a do seu melhor amigo(a)? ", condicao);

// let diferencaIdade = idade - idade2;

// console.log("A diferença entre as idades é de: ", diferencaIdade);


//SEGUNDA QUESTÃO

//const num = Number(prompt("Digite um número par: "));

//console.log(num % 2);

//Quando o usuário digita um número par, sempre tem o resto 0.
//Quando o usuário digita um número impár, sempre tem o resto 1.


//TERCEIRA QUESTÃO

// const idade = Number(prompt("Digite sua idade em anos: "));

// const idadeMes = idade * 12;
// const idadeDia = idade * 365;
// const idadeHora = idade * 8760;
 
// console.log("Quantidade de meses de vida que você tem:",idadeMes, "\n", "Quantidade de dias de vida que você tem:", idadeDia, "\n", "Quantidade de horas de vida que você tem:", idadeHora);


//QUARTA QUESTÃO

// const num1 = Number(prompt("Digite um número: "));
// const num2 = Number(prompt("Digite outro número: "));

// console.log("O primeiro número é maior que o segundo?", num1 > num2);
// console.log("O primeiro número é igual ao segundo?", num1 === num2);
// console.log("O primeiro número é divisível pelo segundo?", (num1 % num2) === 0);
// console.log("O segundo número é divisível pelo primeiro?", (num2 % num1) === 0);
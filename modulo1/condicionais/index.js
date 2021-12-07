//Exercícios de interpretação de código

/**
 * 1°) a) O código pede ao usuário uma entrada e depois converte essa entrada para um number,
 *       depois ele verifica se o resto desse número dividido por 2 é 0, caso seja verdadeira a afirmação,
 *       ele vai imprimir "Passou no teste", caso seja falsa, será impresso "Não passou no teste".
 *     b) Para números Pares.
 *     c) Para números ímpares
 * 
 * 2°) a) O código serve para retornar ao usuário o preço da fruta que ele deseja.
 *     b) O preço da fruta maçã é R$ 2.25
 *     c) O preço da fruta pêra é R$ 5
 * 
 * 3°) a) Está sendo declarada uma variável e transformando seu valor para o tipo Number.
 *     b) 10: "Esse número passou no teste" e logo abaixo: "Essa mensagem é secreta"
 *        -10: mensagem is not defined
 *     c) Sim, pois a váriavel mensagem foi declarada dentro do if, então ela pertence ao escopo do if e ao escopo pai,
 *        com isso, ela não pode ser acessada de fora do if porque ela não foi declarada.
 *     
 */


//Exercícios de escrita de código

//Primeira questão

//a)
//b)
// const idade = Number(prompt("Digite sua idade:"));

//c
// if (idade >= 18) {
//     console.log("Você pode dirigir!");
// } else {
//     console.log("Você não pode dirigir!");
// }


//Segunda Questão

// cosnt turno = prompt("Digite qual turno você estuda: M para matutino, V para vespertino e N para noturno.").toUpperCase().trim();

// if(turno === "M") {
//     console.log("Bom dia!");
// } else if (turno === "V") {
//     console.log("Boa tarde!");
// } else if (turno === "N") {
//     console.log("Boa noite!")
// }


//Terceira Questão

// const turno = prompt("Digite qual turno você estuda: M para matutino, V para vespertino e N para noturno.").toUpperCase().trim();

// switch(turno) {
//     case "M":
//         console.log("Bom dia!");
//         break;
//     case "V":
//         console.log("Boa Tarde!");
//         break;
//     case "N":
//         console.log("Boa noite!");
//         break;
// }


//Quarta Questão

// const genero = prompt("Digite o gênero de filme que vão assistir:").toLowerCase().trim();
// const precoIngresso = Number(prompt("Digite o valor a ser pago pelo ingresso"));

// if(genero === "fantasia" && precoIngresso <= 15) {
//     console.log("Bom filme!");
// } else {
//     console.log("Escolha outro filme :(")
// }

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


//Desafios

//1°)
// const genero = prompt("Digite o gênero de filme que vão assistir:").toLowerCase().trim();
// const precoIngresso = Number(prompt("Digite o valor a ser pago pelo ingresso"));
// const lanche = prompt("Qual lanche você vai comprar:").trim();

// if(genero === "fantasia" && precoIngresso <= 15) {
//     console.log("Bom filme!");
//     console.log(`Aproveite o seu ${lanche}`);
// } else {
//     console.log("Escolha outro filme :(")
// }


//2°)
// const comprador = {
//     nomeCompleto: prompt("Digite seu nome completo:").trim(),
//     tipoDeJogo: prompt("Qual o tipo de jogo que deseja assistir? (Nacional ou Internacional)").toLowerCase().trim(),
//     etapaDeJogo: prompt("Qual a etapa de jogo da partida que deseja assistir? (SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final)").toUpperCase().trim(),
//     categoria: Number(prompt("Qual a categoria da partida ? (opções 1, 2, 3 ou 4)").trim()),
//     quantidadeDeIngressos: Number(prompt("Digite a quantidade de ingressos que deseja:"))
// }

// let valor;

// const calcularPrecoNacional = (etapa) => {
//     if(etapa === "SF"){
//         switch (comprador.categoria) {
//             case 1:
//                 valor = 1320;
//                 break
//             case 2: 
//                 valor = 880;
//                 break;
//             case 3:
//                 valor = 550;
//                 break;
//             case 4: 
//                 valor = 220;
//                 break;
//         }
//     } else if (etapa === "DT"){
//         switch (comprador.categoria) {
//             case 1:
//                 valor = 660;
//                 break;
//             case 2: 
//                 valor = 440;
//                 break;
//             case 3:
//                 valor = 330;
//                 break;
//             case 4: 
//                 valor = 170;
//                 break;
//         }
//     } else if (etapa === "FI"){
//         switch (comprador.categoria) {
//             case 1:
//                 valor = 1980;
//                 break;
//             case 2: 
//                 valor = 1320;
//                 break;
//             case 3:
//                 valor = 880;
//                 break;
//             case 4: 
//                 valor = 330;
//                 break;
//         }
//     } else {
//         console.log("Digite uma etapa válida");
//     }
//     const valorTotal = (valor * comprador.quantidadeDeIngressos);

//     return `Valor do ingresso: ${valor}
//             Valor total: ${valorTotal}`;
// }

// const calcularPrecoInternacional = (etapa) => {
//     if(etapa === "SF"){
//         switch (comprador.categoria) {
//             case 1:
//                 valor = 1320 * 4.10;
//                 break
//             case 2: 
//                 valor = 880 * 4.10;
//                 break;
//             case 3:
//                 valor = 550 * 4.10;
//                 break;
//             case 4: 
//                 valor = 220 * 4.10;
//                 break;
//         }
//     } else if (etapa === "DT"){
//         switch (comprador.categoria) {
//             case 1:
//                 valor = 660 * 4.10;
//                 break;
//             case 2: 
//                 valor = 440 * 4.10;
//                 break;
//             case 3:
//                 valor = 330 * 4.10;
//                 break;
//             case 4: 
//                 valor = 170 * 4.10;
//                 break;
//         }
//     } else if (etapa === "FI"){
//         switch (comprador.categoria) {
//             case 1:
//                 valor = 1980 * 4.10;
//                 break;
//             case 2: 
//                 valor = 1320 * 4.10;
//                 break;
//             case 3:
//                 valor = 880 * 4.10;
//                 break;
//             case 4: 
//                 valor = 330 * 4.10;
//                 break;
//         }
//     } else {
//         console.log("Digite uma etapa válida");
//     }
//     const valorTotal = (valor * comprador.quantidadeDeIngressos);

//     return `Valor do ingresso: ${valor}
//             Valor total: ${valorTotal}`;
// }

// const formatar = (etapaNaoFormatada) => {
//     if(etapaNaoFormatada === "SF"){
//         const etapaFormatada = "Semi-Finais";
//         return etapaFormatada;

//     } else if (etapaNaoFormatada === "DT"){
//         const etapaFormatada = "Disputa 3° lugar";
//         return etapaFormatada;

//     } else if(etapaNaoFormatada === "FI"){
//         const etapaFormatada = "Finais";
//         return etapaFormatada;
//     }
// }

// const imprimirNotaFiscal = (nome, tipoDejogo, etapaDeJogo, categoria, qtdDeIngressos) => {
//     console.log("-----Dados da compra-----");
//     console.log(`Nome do cliente: ${nome}`);
//     console.log(`Tipo de jogo: ${tipoDejogo}`);
//     console.log(`Etapa de jogo: ${formatar(etapaDeJogo)}`);
//     console.log(`Categoria: ${categoria}`);
//     console.log(`Quantidade de Ingressos: ${qtdDeIngressos}`);
//     console.log("-----Valores-----");

//     if(comprador.tipoDeJogo === "nacional"){
//         console.log(calcularPrecoNacional(comprador.etapaDeJogo));
//     } else if (comprador.tipoDeJogo === "internacional"){
//         console.log(calcularPrecoInternacional(comprador.etapaDeJogo));
//     }
// }

// imprimirNotaFiscal(comprador.nomeCompleto, comprador.tipoDeJogo, comprador.etapaDeJogo, comprador.categoria, comprador.quantidadeDeIngressos);

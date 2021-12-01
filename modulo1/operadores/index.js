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


//DESAFIO

//PRIMEIRA QUESTÃO

//a) 
//  const convert = (77 - 32) * (5/9) + 273.15
//  console.log("77°F em K é:", convert, "K")

//b)
// const convert = (80 * (9/5)) + 32;
// console.log("80°C em °F é:", convert, "°F")

//c)
//  const convertF = (30 * (9/5)) + 32;
//  const convertK = (30 + 273.15);
//  console.log("30°C em °F é:", convertF,"°F", "\n", "30°C em K é:", convertK, "K");

//d)
// const c = Number(prompt("Digite o valor em °C que deseja converter para °F e K"));
// const convertF = (c * (9/5)) + 32;
// const convertK = (c + 273.15);

// console.log(c,"em °F é:", convertF,"°F", "\n", c,"em K é:", convertK, "K");


//SEGUNDA QUESTÃO

//a) 
//const watts = Number(prompt("Digite a quantidade de QuiloWatts consumidos:"));
// console.log("O valor a ser pago é de R$:", (watts * 0.05));

//b)
// const watts = Number(prompt("Digite a quantidade de QuiloWatts consumidos:"));
// const conta = (watts * 0.05);
// const desconto = conta - (conta * (15/100));
// console.log("O valor a ser pago com desconto é de R$:", desconto);


//TERCEIRA QUESTÃO

//a)
// const pesoLb = 20;
// const pesoKg = (pesoLb / 2.205);
// console.log("20lb equivalem a", pesoKg, "Kg");

//b)
// const pesoOz = 10.5;
// const pesoKg = (pesoOz / 35.274);
// console.log("10.5oz equivalem a", pesoKg, "Kg");

//c)
// const mi = 100;
// const metro = (mi * 1609);
// console.log("100mi equivalem a", metro, "m") 

//d)
// const ft = 50;
// const metro = (ft / 3.281);
// console.log("50ft equivalem a", metro, "m");

//e) 
// const gal = 103.56;
// const litro = (gal * 3.785);
// console.log("103.56gal equivalem a", litro, "l");

//f)
// const xic = 450;
// const litro = (xic / 3.52);
// console.log("450 xic equivalem a", litro, "l");

//g
// const pesoLb = Number(prompt("Digite algum peso em libra:"));
// const pesoKg = (pesoLb / 2.205);
// console.log(pesoLb, "lb equivalem a", pesoKg, "Kg");

// const ft = Number(prompt("Digite alguma quantidade em pés:"));
// const metro = (ft / 3.281);
// console.log(ft, "ft equivalem a", metro, "m");

// const xic = Number(prompt("Digite alguma quantidade de xícaras:"));
// const litro = (xic / 3.52);
// console.log(xic, "xic equivalem a", litro, "l");
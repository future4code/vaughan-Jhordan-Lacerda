//Exercícios de interpretação de código

/**
 * 1°) a)Será impresso: Matheus Nachtergaele, Virginia Cavendish, canal:Globo, horario:14h
 * 
 * 2°) a) console.log(cachorro) = nome: Juca, idade: 3, raca: SRD
 *        console.log(gato) = nome: Juba, idade: 3, raca: SRD
 *        console.log(tartaruga) = nome: Jubo, idade: 3, raca: SRD
 *     
 *     b) ele faz a cópia do objeto cachorro, ou seja, ele copia todas as chaves e valores do objeto antigo para o mais novo.
 * 
 * 3°) a) False e undefined
 *     b) Retornou undefined provavelmente porque não foi definido a propriedade "altura"
 */

//Exercícios de escrita de código

//Primeira questão

//a)
// const pessoa = {
//     nome: "Hiago",
//     apelidos: ["Presidente", "Hiagão", "Tripé"]
// }

// const apresentar = (pessoa) => {
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);
// }

// apresentacao(pessoa);

//b)
// const novaPessoa = {
//     ...pessoa,
//     apelidos: ["Brocador", "Prego", "Musicista"]
// }

// apresentacao(novaPessoa);

//Segunda questão

//a)
// const pessoa1 = {
//     nome: "Jhordan",
//     idade: 19,
//     profissao: "estudante"
// }

// const pessoa2 = {
//     nome: "Thiago",
//     idade: 33,
//     profissao: "Professor"
// }

//b)
// const mostrar = (pessoa1, pessoa2) => {
    
//     const array1 = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length];
//    // console.log(array1);
//     const array2 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length];
//     //console.log(array2);

//     return array1, array2;
// }

//mostrar(pessoa1, pessoa2);

//Questão 3

//a)
// const carrinho = [];

//b)
// const fruta1 = {
//     nome: "Maçã",
//     disponibilidade: true
// }

// const fruta2 = {
//     ...fruta1,
//     nome: "Banana"
// }

// const fruta3 = {
//     ...fruta1,
//     nome: "uva"
// }

//c)
// const adicionarFruta = (fruta) =>{
//     carrinho.push(fruta); 
// }

// adicionarFruta(fruta1);
// adicionarFruta(fruta2);
// adicionarFruta(fruta3);

//d)
// console.log(carrinho);


//Desafios

//Primeiro desafio
// let nome;
// let idade;
// let profissao;

// const perguntar = () => {
//     nome = prompt("Digite seu nome:");
//     idade = Number(prompt("Digite sua idade"));
//     profissao = prompt("Digite sua profissão:");

// }

// perguntar();

// const pessoa = {
//     nome: nome,
//     idade: idade,
//     profissao: profissao
// }

// console.log(pessoa);
// console.log(typeof pessoa);


//Segundo Desafio
// const filme1 = {
//     nome: "Vingadores: Era de Ultron",
//     anoDeLancamento: 2015
// }

// const filme2 = {
//     nome: "Vingadores: Guerra Infinita",
//     anoDeLancamento: 2018
// }

// const compararDataFilmes = (filme1, filme2) => {
//     const logica1 = (filme1.anoDeLancamento < filme2.anoDeLancamento);
//     const logica2 = (filme1.anoDeLancamento === filme2.anoDeLancamento);

//     return console.log(`O primeiro filme foi lançado antes do segundo? ${logica1}
// O primeiro filme foi lançado no mesmo ano do segundo? ${logica2}`);
// }

// compararDataFilmes(filme1, filme2);


//Terceiro Desafio
// const carrinho = [];

// const fruta1 = {
//     nome: "Maçã",
//     disponibilidade: true
// }
        
// const fruta2 = {
//     ...fruta1,
//     nome: "Banana"
// }
    
// const fruta3 = {
//     ...fruta1,
//     nome: "uva"
//     }
    
// const adicionarFruta = (fruta) =>{
//     carrinho.push(fruta); 
// }

// const controlarEstoque = (fruta) => {
//     const disponibilidadeInvertida = !fruta.disponibilidade;

//     return fruta.disponibilidade = disponibilidadeInvertida;
// }

// controlarEstoque(fruta2);
    
// adicionarFruta(fruta1);
// adicionarFruta(fruta2);
// adicionarFruta(fruta3);
    
// console.log(carrinho);
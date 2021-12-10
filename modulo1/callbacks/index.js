// Exercícios de interpretação de código

/**
 * 1°)a) Será impresso os valores de nome e apelido, depois o seu índice e depois a array completa para os três objetos.
 * 
 * 2°) Será impresso uma nova array com os valores contidos em nome.
 * 
 * 3°) Será impresso outra array com os valores contidos em nome e apelido, menos o com o apelido Chijo
 */


//Exercícios de escrita de código

//1°)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

//a)
// const nomeDosDogs = pets.map((nomeDog, index, pets) =>{
//     return nomeDog.nome;
// });

// console.log(nomeDosDogs);

//b)
// const apenasDogSalsicha = pets.filter((dog, index, pets) => {
//     return dog.raca === "Salsicha";
// })

// console.log(apenasDogSalsicha);

//c)
// const poodleDesconto = pets.filter((dog, index, pets) =>{
//     if(dog.raca === "Poodle"){
//         console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}`);
//     }
// })


//2°)
//a)
// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

//a)
// const apenasNomeDoItem = produtos.map((produto) => {
//     return produto.nome;
// });

// console.log(apenasNomeDoItem);

//b)
// const descontoNosItens = produtos.map((produto) => {
//     let desconto = produto.preco - (produto.preco * 0.05);
//     produto.preco = desconto.toFixed(2);

//     const produtoObjeto = {
//         nome: produto.nome,
//         preco: produto.preco
//     }
//     return produtoObjeto;
// });

// console.log(descontoNosItens);
//nota do exercíco, no notion, o Resultados esperados em cada item da letra b do guaraná

//c)
// const apenasBebidas = produtos.filter((produto) => {
//     if(produto.categoria === "Bebidas"){
//         return produto.categoria;
//     }
// })

// console.log(apenasBebidas)

//d)
// const apenasYpe = produtos.filter((produto) => {
//     if(produto.nome.includes("Ypê")){
//         return produto.nome;
//     }
// });

// console.log(apenasYpe);

//e)
// const apenasYpe = produtos.filter((produto) => {
//     if(produto.nome.includes("Ypê")){
//         return produto.nome;
//     }
// });
 
// const mensagemYpe = apenasYpe.map(produto => `Compre ${produto.nome} por ${produto.preco}`);
// console.log(mensagemYpe);


//DESAFIOS

// const pokemons = [
//    { nome: "Bulbasaur", tipo: "grama" },
//    { nome: "Bellsprout", tipo: "grama" },
//    { nome: "Charmander", tipo: "fogo" },
//    { nome: "Vulpix", tipo: "fogo" },
//    { nome: "Squirtle", tipo: "água" },
//    { nome: "Psyduck", tipo: "água" },
// ]

//a)
// pokemons.sort(function (a,b){
//    if (a.nome > b.nome) {
//       return 1;
//     }
//     if (a.nome < b.nome) {
//       return -1;
//     }
//     return 0;
// });

// const arrayEmOrdemAlfabetica = pokemons.map((pokemon) => {
//    console.log(pokemon.nome);
// })

//b)
// const arraySoComTipos = pokemons.map((pokemon) => {
//     return pokemon.tipo;
// })

// const arraySemRepeticaoDeTipo = arraySoComTipos.filter((pokemon, index) => {
//    return arraySoComTipos.indexOf(pokemon) === index;
// })

// console.log(arraySemRepeticaoDeTipo)
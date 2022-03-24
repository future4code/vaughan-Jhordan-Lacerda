//a) Para receber parâmetros nós digitamos no console: node nome-do-arquivo.js parâmetro ou nom run nome-do-script parâmetro.

//b)
const name = process.argv[2];
const age = process.argv[3];

console.log(`Olá ${name}! Você tem ${age} anos.`)

//c)
// const name = process.argv[2];
// const age = process.argv[3];
// const agePlusSeven = Number(age) + Number(7)

// console.log(`Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${agePlusSeven}`)

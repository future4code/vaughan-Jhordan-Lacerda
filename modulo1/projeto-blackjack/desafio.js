/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartaComprada = comprarCarta();
let cartaComprada2 = comprarCarta();

let cartaCompradaBot = comprarCarta();
let cartaCompradaBot2 = comprarCarta();

const arrayCartasUser = [cartaComprada, cartaComprada2];
const arrayCartasBot = [cartaCompradaBot, cartaCompradaBot2];

console.log(cartaComprada.texto, cartaComprada2.texto);
console.log(cartaCompradaBot.texto, cartaCompradaBot2.texto);

if(cartaComprada.valor === 11 && cartaComprada2.valor === 11){
   cartaComprada = comprarCarta();
   cartaComprada2 = comprarCarta();
   console.log("Entrei no if")
   console.log(cartaComprada.texto, cartaComprada2.texto);
} else if(cartaCompradaBot.valor === 11 && cartaCompradaBot2.valor === 11) {
   cartaCompradaBot = comprarCarta();
   cartaCompradaBot2 = comprarCarta();
   console.log("Entrei no if bot")
   console.log(cartaCompradaBot.texto, cartaCompradaBot2.texto);
}

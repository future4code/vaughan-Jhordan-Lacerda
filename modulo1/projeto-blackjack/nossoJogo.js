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

console.log("Boas vindas ao jogo de BlackJack!");

if(confirm("Deseja iniciar uma nova rodada?")) {
   const cartaComprada = comprarCarta();
   const cartaComprada2 = comprarCarta();

   const valorSomaCartasUser = cartaComprada.valor + cartaComprada2.valor;
   
   console.log(`Usuário - cartas: ${cartaComprada.texto} ${cartaComprada2.texto} - pontuação ${valorSomaCartasUser}`);

   const cartaCompradaBot = comprarCarta();
   const cartaCompradaBot2 = comprarCarta();

   const valorSomaCartasBot = cartaCompradaBot.valor + cartaCompradaBot2.valor;

   console.log(`Computador - cartas: ${cartaCompradaBot.texto} ${cartaCompradaBot2.texto} - pontuação ${valorSomaCartasBot}`)

   if(valorSomaCartasUser > valorSomaCartasBot) {
      console.log("O usuário ganhou!")
   } else if(valorSomaCartasBot > valorSomaCartasUser){
      console.log("O computador ganhou!")
   }else {
      console.log("Empate")
   }

} else {
   console.log("O jogo acabou!")
}

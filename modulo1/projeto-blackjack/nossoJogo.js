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

alert("Boas vindas ao jogo de BlackJack!");

if(confirm("Deseja iniciar uma nova rodada?")) {
   const cartaComprada = comprarCarta();
   const cartaComprada2 = comprarCarta();

   const valorSomaCartasUser = cartaComprada.valor + cartaComprada2.valor;
   
   alert(`Usuário - cartas: ${cartaComprada.texto} ${cartaComprada2.texto} - pontuação ${valorSomaCartasUser}`);

   const cartaCompradaBot = comprarCarta();
   const cartaCompradaBot2 = comprarCarta();

   const valorSomaCartasBot = cartaCompradaBot.valor + cartaCompradaBot2.valor;

   alert(`Computador - cartas: ${cartaCompradaBot.texto} ${cartaCompradaBot2.texto} - pontuação ${valorSomaCartasBot}`)

   if(valorSomaCartasUser > valorSomaCartasBot) {
      alert("O usuário ganhou!")
   } else if(valorSomaCartasBot > valorSomaCartasUser){
      alert("O computador ganhou!")
   }else {
      alert("Empate")
   }

} else {
   alert("O jogo acabou!")
}

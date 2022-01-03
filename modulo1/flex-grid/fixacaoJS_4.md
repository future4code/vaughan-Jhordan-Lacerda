ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  if(arrayDeNumeros.includes(numeroEscolhido)){
    let total = -1;
    for(let i of arrayDeNumeros){
      if(arrayDeNumeros[i] === numeroEscolhido){
        total += 1;
      }
    }
    return `O número ${numeroEscolhido} aparece ${total}x` 
  } else {
    return "Número não encontrado"
  }
}
ˋˋˋ

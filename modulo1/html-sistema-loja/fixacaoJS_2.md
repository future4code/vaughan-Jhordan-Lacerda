ˋˋˋ
function calculaPrecoTotal(quantidade) {
  let precoTotal = 0;
  
  if(quantidade <  12){
    precoTotal = quantidade * 1.30;
    return precoTotal;
  } else if(quantidade >= 12){
    precoTotal = quantidade * 1;
    return precoTotal;
  }
}
ˋˋˋ
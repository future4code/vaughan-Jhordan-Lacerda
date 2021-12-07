// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura:"));
  const largura = Number(prompt("Digite a altura:"));
  
  const areaRetangulo = Number((altura * largura));

  console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano que você está:"));
  const anoNascimento = Number(prompt("Digite o ano que você nasceu:"));

  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura);

  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite o seu nome:");
  const idade = Number(prompt("Digite sua idade:"));
  const email = prompt("Digite o seu e-mail:");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite a sua primeira cor favorita:");
  const cor2 = prompt("Digite a sua segunda cor favorita:");
  const cor3 = prompt("Digite a sua terceira cor favorita:");

  const listaDeCores = [cor1, cor2, cor3];

  console.log(listaDeCores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return (custo / valorIngresso);
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length -1];

  return ultimoElemento;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElemento;
  let ultimoElemento;
  
  primeiroElemento = array[0];
  ultimoElemento = array[array.length - 1];

  array[0] = ultimoElemento;
  array[array.length - 1] = primeiroElemento;

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  const condicao = (string1 === string2);

  return condicao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"));
  const anoNascimento = Number(prompt("Digite o seu ano de nascimento:"));
  const anoCarteiraIdentidade = Number(prompt("Digite o ano que sua carteira de identidade foi emitida:"));

  const idadePessoa = anoAtual - anoNascimento;
  const idadeCarteira = anoAtual - anoCarteiraIdentidade;
  
  console.log(idadePessoa <= 20 && idadeCarteira >= 5 || idadePessoa > 20 && idadePessoa <=50 && idadeCarteira >= 10 || idadePessoa > 50 && idadeCarteira >= 15);

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui     
  const bissexto = ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0; 
  
  return bissexto;
}

checaAnoBissexto(2012)

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const pergunta1 = prompt("Digite sim ou não: Você tem mais de 18 anos?");
  const pergunta2 = prompt("Digite sim ou não: Você possui ensino médio completo?");
  const pergunta3 = prompt("Digite sim ou não: Você possui disponibilidade exclusiva durante os horários do curso?");

  console.log(pergunta1 === 'sim' && pergunta2 === 'sim' && pergunta3 === 'sim');


}
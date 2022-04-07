//eu não subi esses exercicios na pasta do modulo porque
//eu subi essa pasta junto com a atividade de ontem e ela ainda não foi aceita

function checaTriangulo(a: number, b: number, c: number): string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}
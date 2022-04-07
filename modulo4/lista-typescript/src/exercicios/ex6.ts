type user = {
  cliente: string;
  saldoTotal: number;
  debitos: Array<number>;
};

export const ex6 = (
  arr: Array<user> = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] },
  ]
) => {
  const saldoTotalAtualizado = arr
    .map((conta) => {
      let somaDebitos: number = 0;
      for (let i: number = 0; i < conta.debitos.length; i++) {
        somaDebitos += conta.debitos[i];
      }
      conta.saldoTotal = conta.saldoTotal - somaDebitos;
      conta.debitos.length = 0;
      return conta;
    })
    .filter((contas) => {
      return contas.saldoTotal < 0;
    });

  console.table(saldoTotalAtualizado);
};

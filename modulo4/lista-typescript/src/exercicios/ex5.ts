type usuario = {
  name: string;
  email: string;
  role: string;
};

export const ex5 = (
  arr: Array<usuario> = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" },
  ]
) => {
  const roleAdm = arr
    .filter((pessoa) => {
      return pessoa.role === "admin";
    })
    .map((adm) => {
      return adm.email;
    });

  return roleAdm;
};

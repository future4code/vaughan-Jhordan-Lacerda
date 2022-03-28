export function ex1 (name: string, birthDate: string): string {
    const arr = birthDate.split("/");
    return `Olá me chamo ${name}, nasci no dia ${arr[0]} do mês ${arr[1]} do ano de ${arr[2]}`;
};

//eu executei esse código no console do vscode e apareceu esse erro

const tasks = [
    "Lavar a louça"
]
const task = process.argv[2];

console.log("Tarefa adicionada com sucesso!");

tasks.push(task);
console.log(tasks)

function imprimeTresCoresFavoritas():void {
    const prompt = require('prompt-sync')();

    const cor1: string = prompt("Insira sua primeira cor favorita")
    const cor2: string = prompt("Insira sua segunda cor favorita")
    const cor3: string = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
}


imprimeTresCoresFavoritas()
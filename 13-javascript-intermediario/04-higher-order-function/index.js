


/*const calcularAnoDeNascimento = (idade, mesDeNascimento, imprimir) => {
    let mesAtual = 7
    const anoDeNascimento = 1999 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log(`Seu ano de nascimento é ${anoDeNascimento}`);
}

calcularAnoDeNascimento(24, 7, imprimirAnoDeNascimento);
*/

function multiplicar(multiplicador) {
    return function(numero) {
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(2));


/*function dobrar(numero) {
    return numero * 2;
}

function triplicar(numero) {
    return numero * 3;
}*/





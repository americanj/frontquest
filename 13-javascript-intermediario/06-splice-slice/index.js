
// slice
/*let frutas = ['banana', 'maçã', 'laranja', 'uva']

let frutasExtraidas = frutas.slice(1, 3)

console.log(frutasExtraidas);*/

/*
//splice
let frutas = ['banana', 'maçã', 'laranja', 'uva']

//onde começa a divisão / até onde vai querer q dure
let arrayNovo = frutas.splice(1, 3)

console.log(arrayNovo);*/

//splice com substituição

let frutas = ['banana', 'maçã', 'laranja', 'uva']

let removerAndAdicionarNovasFrutas = frutas.splice(0, 2, "Goiana", "abacaxi")

console.log(frutas);
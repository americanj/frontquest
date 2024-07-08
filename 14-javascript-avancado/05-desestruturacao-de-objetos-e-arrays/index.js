
// DESESTRUTURAÇÃO DE OBJETO

/*let pessoa = { nome: 'Roberto', sobrenome: 'Dias', idade: 33 }*/

/*
let nome = pessoa.nome
let idade = pessoa.idade
*/

// Normal
//let { nome: nome, idade: idade } = pessoa;

// Simplificado
//let { nome, idade } = pessoa;

//console.log(nome);
//console.log(idade);


// DESESTRUTURAÇÃO DE ARRAY

var numeros = [1, 2, 3];

const [ um, dois, tres ] = numeros;
console.log(um);

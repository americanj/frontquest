
let pessoas = [
    { nome: 'Pedro', idade: 31 },
    { nome: 'Thiago', idade: 22 },
    { nome: 'João', idade: 31 }
]

// Sem Map
/*let nomeDasPessoas = []
for (let i = 0; i < pessoas.length; i++) {
    nomeDasPessoas.push(pessoas[i].nome)
}*/

// Com Map
let nomeDasPessoas = pessoas.map(pessoa => 
    `${pessoa.nome} têm 
     ${pessoa.idade} anos de idade`)

console.log(nomeDasPessoas);
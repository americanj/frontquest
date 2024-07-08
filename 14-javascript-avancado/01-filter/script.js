
let pessoas = [
    { nome: 'Pedro', idade: 31 },
    { nome: 'Thiago', idade: 22 },
    { nome: 'João', idade: 31 }
]

// Sem Filter
/*let pessoasComIdadeDe31Anos = []
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade === 31) {
        pessoasComIdadeDe31Anos.push(pessoas[i])
        console.log("sim");
    }
    
}

// Printa Pedro e João.
console.log(pessoasComIdadeDe31Anos);
*/

// Cpm Filter
/*let pessoasComIdadeDe31Anos = [] = pessoas.filter(function (pessoa) {
    return pessoa.idade === 31;
});*/

// Com Filter Simplificado
let pessoasComIdadeDe31Anos = [] = pessoas.filter(pessoa => pessoa.idade === 31)

console.log(pessoasComIdadeDe31Anos);
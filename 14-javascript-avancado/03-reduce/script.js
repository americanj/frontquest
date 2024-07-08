

let orderns = [
    { cliente: 'Roberto', tipo: 'compra', quantidade: 56, ativo: 'NFLX34' },
    { cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'AAPL34' },
    { cliente: 'Raphael', tipo: 'venda', quantidade: 21, ativo: 'GOGL34' }
]

// Sem Reduce

/*let quantidadeDeOrdens = 0
for (let i = 0; i < orderns.length; i++) {
    quantidadeDeOrdens += orderns[i].quantidade
}*/

// Com Reduce
let quantidadeDeOrdens = orderns.reduce((somaDeTodasOrdens, ordem) => {
    console.log('ORDEM', somaDeTodasOrdens, ordem);
    return somaDeTodasOrdens + ordem.quantidade
}, 0)


console.log(quantidadeDeOrdens);
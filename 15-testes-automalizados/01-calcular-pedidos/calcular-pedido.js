const meuPedido = {
    items: [
        { nome: 'Poção de vida', valor: 100 },
        { nome: 'Espada de prata', valor: 200 },
        { nome: 'Entrega', valor: 40, entrega: true }
    ]
}

const calcularValorPedido = pedido => {
    const valorDosProdutos = pedido.items.filter(item => !item.entrega)
    .reduce((totalPedido, pedidoAtual) => totalPedido + pedidoAtual.valor, 0)

                                        //se for um item de entrega pega
    const entrega = pedido.items.filter(item => item.entrega);

    if (valorDosProdutos > 500) {
        return valorDosProdutos;
    } else {
        return valorDosProdutos + entrega[0].valor;
    }
}


//console.log(calcularValorPedido(meuPedido));
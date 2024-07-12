
const acrescimoValorEntrega = 0.2


const calcularValorPedido = pedido => {
    const valorDosProdutos = pedido.items
    .filter(item => !item.entrega)
    .reduce((totalPedido, pedidoAtual) => totalPedido + pedidoAtual.valor, 0)

  
                                        //se for um item de entrega pega
    const entrega = pedido.items.filter(item => item.entrega);

    if (pedido.estado === 'RS' || pedido.estado === 'SC') {
        const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega;
        entrega[0].valor += acrescimoEntrega;
    } 

    return valorDosProdutos > 500 ? valorDosProdutos : valorDosProdutos + entrega[0].valor;
}

module.exports = calcularValorPedido;


//console.log(calcularValorPedido(meuPedido));
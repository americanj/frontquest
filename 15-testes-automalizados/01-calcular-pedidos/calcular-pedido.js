
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

module.exports = calcularValorPedido;


//console.log(calcularValorPedido(meuPedido));

const calcularValorPedido = require('./calcular-pedido.js');

it('não deve cobrar valor do frete quando valor dos produtos for superior a 500', () => {
    //AAA 3 Passos de criação de um test.

    // ARRANGE - Organizar
    const meuPedido = {
        items: [
            { nome: 'Poção de vida', valor: 1000 },
            { nome: 'Espada de prata', valor: 200 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    }

    // ACT - agir / o que vai ser testado
    const resultado = calcularValorPedido(meuPedido);

    // ASSERT - esperado
    expect(resultado).toBe(1200)
});


it('deve cobrar valor de frete quando valor dos produtos for menor que 500', () => {

    const meuPedido = {
        items: [
            { nome: 'Poção de vida', valor: 300 },
            { nome: 'Espada de prata', valor: 100 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    }
    const resultado = calcularValorPedido(meuPedido);
    expect(resultado).toBe(440);
});


it('deve cobrar valor de frete caso valor dos produtos seja EXATAMENTE 500', () => {

    const meuPedido = {
        items: [
            { nome: 'Poção de vida', valor: 500 },
            { nome: 'Espada de prata', valor: 60 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    }
    expect(calcularValorPedido(meuPedido)).toBe(560);
});
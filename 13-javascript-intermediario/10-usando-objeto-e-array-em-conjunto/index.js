

/*
let videoGames = {
    nome: 'Xbox',
    valor: 3000,
    jogos: [
        {nome: 'Final fantasy'},
        {nome: 'Falllout'}
    ]
}

let jogo3 = {
    nome: 'fifa'
}

videoGames.jogos.forEach(element => console.log(element))

videoGames.jogos.push(jogo3)

console.log("\nDepois do push");
videoGames.jogos.forEach(element => console.log(element))
*/

let cliente = {
    nome: 'ricardo',
    ultimoPedido: {
        produto: 'xbox',
        price: 3000,
        jogos: [
            {nome: 'Crossfire'},
            {nome: 'CS'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[1].nome);


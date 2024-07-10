

async function criarBaralhoEmbaralhado() {
    const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    const resposta = await fetch(url);
    return await resposta.json();
}

async function tirarUmaCarta(deckId) {
    const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    const resposta = await fetch(url);
    return await resposta.json();
}

async function tirarUmaCartaAleatoriaDoBaralho() {
    const baralho = await criarBaralhoEmbaralhado();
    const carta = await tirarUmaCarta(baralho.deck_id)
    document.getElementById('carta').src = carta.cards[0].image
}

tirarUmaCartaAleatoriaDoBaralho();
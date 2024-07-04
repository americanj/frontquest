let filmes = [
    {
        capa: './img/coringa.jpg',
        titulo: 'Coringa',
        descricao: 'Em Coringa, Arthur Fleck (Joaquin Phoenix) trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais.'
    },
    {
        capa: './img/carro.jpg',
        titulo: 'Carros',
        descricao: 'Relâmpago McQueen (Owen Wilson) é um carro de corridas ambicioso, que já em sua 1ª temporada na Copa Pistão torna-se um astro. Ele sonha em se tornar o 1º estreante a vencer o campeonato, o que possibilitaria que assinasse um patrocínio com a cobiçada Dinoco.'
    },
    {
        capa: './img/vingadores.jpg',
        titulo: 'Vingadores',
        descricao: 'Os Vingadores eram um time de indivíduos extraordinários, sejam com super-poderes ou outras características especiais. Seu propósito é proteger a estabilidade global de ameças internas ou extraterrestres.'
    },
]

// setando um padrão
let body = document.getElementsByTagName('body')[0]
let h1 = document.getElementsByTagName('h1')[0]
let p = document.getElementsByTagName('p')[0]

body.style.backgroundImage = `url(${filmes[0].capa})`;
h1.innerText = `${filmes[0].titulo}`
p.innerText = `${filmes[0].descricao}`

// setando com setas
const setaEsquerda = document.getElementsByClassName('seta-esquerda')[0];
const setaDireita = document.getElementsByClassName('seta-direita')[0];


// action
setaEsquerda.addEventListener('click', () => {  

    const regex = /url\(("[^"]+")\)/;
    const match = body.style.backgroundImage.match(regex);

    if (match) {
        const caminhoCapaFormatado = match[1];

        const urlCapaCoringa = JSON.stringify(`${filmes[0].capa}`);
        const urlCapaVingador = JSON.stringify(`${filmes[2].capa}`);

        if (caminhoCapaFormatado === urlCapaCoringa) 
            setarComponentesDoFilme(`url(${filmes[2].capa})`, `${filmes[2].titulo}`, `${filmes[2].descricao}`);
       
        else if (caminhoCapaFormatado === urlCapaVingador) 
            setarComponentesDoFilme(`url(${filmes[1].capa})`, `${filmes[1].titulo}`, `${filmes[1].descricao}`);
             
        else 
            setarComponentesDoFilme(`url(${filmes[0].capa})`, `${filmes[0].titulo}`, `${filmes[0].descricao}`);
    }
});


function setarComponentesDoFilme(urlCapa, titulo, descricao) {
    body.style.backgroundImage = urlCapa;
    h1.innerText = titulo;
    p.innerText = descricao;
}




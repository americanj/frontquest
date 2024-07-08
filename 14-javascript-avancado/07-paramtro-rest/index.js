

/*
function incentivarQuester(mensagem, nome) {
    console.log(`${mensagem} ${nome}`);
}
*/

function incentivarQuester(mensagem, ...nomes) {
    console.log(nomes);
    nomes.map(nome => console.log(`${mensagem} ${nome}`));
}

// Parâmetro REST
incentivarQuester('Parabens', 'Carlos', 'Rodrigo', 'Ferdinando', 1, true)
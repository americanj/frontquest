

const dataAtual = new Date();

//const umDiaDepois = new Date(dataAtual);
const umMesDepois = new Date(dataAtual);

//umDiaDepois.setDate(dataAtual.getDate() - 1);
umMesDepois.setMonth(dataAtual.getMonth() - 1);
console.log(umMesDepois);


// outra forma de formatação com .locale.
const opcoes = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
} 

const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes)
console.log(dataFormatada);


// outra forma de formatar com dateFormate
const opcoes2 = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const formatador = new Intl.DateTimeFormat('pt-BR', opcoes2)
const dataFormatada2 = formatador.format(dataAtual);
console.log(dataFormatada2);


const botoesAbrir = document.getElementsByClassName('fa-caret-down')
const conteudosEscondidos = document.getElementsByClassName('conteudo-escondido')

for (let i = 0; i < botoesAbrir.length; i++) {
    var contador = 0;

    botoesAbrir[i].addEventListener('click', function() {
        esconderTodos();
        
        if (conteudosEscondidos[i].classList.contains('esconder') && contador === 0) {
            conteudosEscondidos[i].classList.remove('esconder')   
            botoesAbrir[i].classList.add('animacao')
            contador++;
        } else {
            conteudosEscondidos[i].classList.add('esconder')
            contador = 0;
        }
    })    
}


function esconderTodos() {
    for(let i = 0; i < conteudosEscondidos.length; i++) {

        if (!conteudosEscondidos[i].classList.contains('esconder')) {
            conteudosEscondidos[i].classList.add('esconder')
            botoesAbrir[i].classList.remove('animacao')
        } 
    }
}

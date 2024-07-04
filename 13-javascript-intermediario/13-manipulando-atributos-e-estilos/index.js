

function alterarcor() {
    const posts = document.getElementsByClassName('post');
    const primeiroPost = posts[0]

    primeiroPost.style.backgroundColor = 'red'
}

function aumentarFonteDoSegundoArticle() {
    const textPosts = document.getElementsByClassName('texto-post')
    const segundoTexto = textPosts[1];
    
    segundoTexto.classList.add('font-grande')
}

function marcarRadio(genero) {
    const radioMasculino = document.getElementById('genero-m')
    const radioFeminino = document.getElementById('genero-f')

    if (genero === 'M') radioMasculino.checked = true;
    else if (genero === 'F') radioFeminino.checked = true;
}
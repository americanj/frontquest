

function adicionarComentario() {
    let inputComentario = document.getElementsByName('novo-comentario')

    let textoValor = inputComentario[0].value
    let novosComentarios = document.getElementById('novos-comentarios')

    novosComentarios.innerHTML += `<p>Novo Comentário: ${textoValor}</p>`
}
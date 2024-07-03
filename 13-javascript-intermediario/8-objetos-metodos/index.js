

let usuario = {
    nome: 'roberto',
    excluir: function() {
        console.log(`O usuário: ${this.nome} foi excluído!`);
    }
}

usuario.excluir()
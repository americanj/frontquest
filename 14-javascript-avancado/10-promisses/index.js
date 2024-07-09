/*
    4 Estados das promises 
    
    Pendentes 
    Realizado resolve
    Recusada reject
    Estabelecida 
**/

// Esses argumentos são funções.
/*new Promise((resolve, reject) => {

})*/



let ferverAgua = function(chaleiraNoFogo, fogaoLigado) {
    return new Promise((resolve, reject) => {
        if (chaleiraNoFogo && fogaoLigado) {
            console.log('começando o processo de ferver água.');
            resolve();
        } else {
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água.');
            reject();
        }
    })
}


let chaleiraNoFogo = true;
let fogaoLigado = true;

ferverAgua(chaleiraNoFogo, fogaoLigado);
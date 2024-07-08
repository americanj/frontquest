
const pessoas = ['Roberto', 'Ricardo', 'Rafael']
//console.log(...pessoas);

// ANTES DO SPREAD - CONCATENANDO DOIS ARRAYS
/*let pessoas1 = ['Roberto', 'Ricardo', 'Rafael']
let pessoas2 = ['Pedro', 'João', 'Paulo']

var novoArrayComConcat = pessoas1.concat(pessoas2)
console.log("Com Concat: " + novoArrayComConcat);


pessoas1 = [ ...pessoas1, ...pessoas2]
console.log("Com spread: " + pessoas1);
*/


// Clonar Objeto com Spread
const pessoa1 = { nome: 'carlos', idade: 33 }

const ObjetoClonado = { ...pessoa1 }

console.log(pessoa1);
console.log(ObjetoClonado);

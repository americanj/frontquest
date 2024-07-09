
/*
setTimeout(() => {
    console.log("cachorro");

}, 3000);
*/

/*
setTimeout(() => {
    console.log("ei amigo");
}, 2000);


console.log("print antes do setTimeout");
*/

// Limpando o setTimeout e setInterval
let idDoIntervalo = setInterval(() => {
    console.log('Execultando a cada 2 segundos');
}, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo);



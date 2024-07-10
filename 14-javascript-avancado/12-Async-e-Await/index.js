
let ferverAqua = (chaleiraTaNoFogo, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraTaNoFogo && fogaoEstaLigado) {
            console.log('passo 1 finalizado. Aqua foi fervida!');
            resolve(true);
        } else {
            console.log('é necessário colocar a chaleira com agua e ligar o fogao senão teu cafezinho nao vai ficar pronto nunca.');
            reject();
        }
    });
}

let passarCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('passo 2 finalizado café foi passado');
        resolve(true);
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('passo 3 finalizado café foi tomado');
        resolve(true);
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('passo 4 finalizado xíxara do café foi lavada');
        resolve(true);
    })
}




/*
// Forma superior ao call back hell.
ferverAqua(chaleiraTaNoFogo, fogaoEstaLigado)
    .then(() => {
        return passarCafe();
    })
    .then(() => {
        return tomarCafe();
    })
    .then(() => {
        return lavarXicara();
    })
    .then(() => {
        console.log('finalizado ritual do cafe go to work!');
    })
*/

let chaleiraTaNoFogo = false;
let fogaoEstaLigado = true;

// Forma superior ao then
async function iniciarProcessoDeFazerCafe() {
    const aguaFervida = await ferverAqua(chaleiraTaNoFogo, fogaoEstaLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if (xicaraLavada) console.log('Finalizado o ritual de tomar o café bora codar!');

}
iniciarProcessoDeFazerCafe()
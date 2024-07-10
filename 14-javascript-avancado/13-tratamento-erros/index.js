
let ferverAqua = (chaleiraTaNoFogo, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if (typeof chaleiraTaNoFogo != 'boolean') 
            throw 'somente o tipo boleano é aceito'

        if (chaleiraTaNoFogo && fogaoEstaLigado) {
            console.log('passo 1 finalizado. Aqua foi fervida!');
            resolve(true);
        } else {
            let msgErro = 'é necessário colocar a chaleira com agua e ligar o fogao senão teu cafezinho nao vai ficar pronto nunca.';
            reject(msgErro);
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

let chaleiraTaNoFogo = 'teste';
let fogaoEstaLigado = true;

// Forma superior ao then
async function iniciarProcessoDeFazerCafe() {
    try {
        const aguaFervida = await ferverAqua(chaleiraTaNoFogo, fogaoEstaLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
        //if (xicaraLavada) console.log('Finalizado o ritual de tomar o café bora codar!');
    }
    catch (error) {
        console.log(error);
    } finally {
        console.log('Finalizado o ritual de tomar o café bora codar!');
    }
}
iniciarProcessoDeFazerCafe()
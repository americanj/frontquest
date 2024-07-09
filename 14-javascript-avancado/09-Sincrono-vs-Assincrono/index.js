
function colocarAquaParaFerver() {
    console.log('\ncolocar água para ferver.');

    setTimeout(() => {
        console.log("\nagua ferveu");
        passarOcafe();
    }, 3000);
}

function prepararParaPassarOcafe() {
    console.log('\npegar o po de cafe');
    console.log('pegar filtro de café');
    console.log('colocar o café no filtro');
    console.log('colocar o filtro em cima da xícara');
}

function passarOcafe() {
    console.log('passando o café');
}

colocarAquaParaFerver();
prepararParaPassarOcafe();

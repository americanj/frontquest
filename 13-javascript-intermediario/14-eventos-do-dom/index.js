

let selectEstado = document.querySelector("select[name='estado']")

selectEstado.addEventListener('change', (event) => {
    console.log(event.target.value);
})



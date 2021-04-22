let buttonEnviar = document.getElementById("buttonEnviar");
let nombreIn = document.getElementById("nombreIn");


nombreIn.addEventListener("input", function () {
    nombreIn.classList.remove("errorNombre");
})

buttonEnviar.addEventListener("click", function() {
    console.log(nombreIn.value);

    if (nombreIn.value === '') {
        nombreIn.className = 'errorNombre';
        alert("Debe ingresar un nombre")
    } else{
        alert("Hola " + nombreIn.value); 
    }
})



let contenedor = document.getElementById("contenedor");

contenedor.addEventListener('mouseover', () => {
    contenedor.classList.toggle("color");
})

contenedor.addEventListener('mouseout', () => {
     contenedor.classList.toggle("color")
})

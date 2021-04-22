
let datosProductos = [
    {descripcion:'Zapato Nike'},
    {descripcion:'Zapato Adidas'},
    {descripcion:'Zapato Puma'},
    {descripcion:'Zapato UnderArmor'},
    {descripcion:'Zapato New Balance'}
];

let contenedorProductos = document.createElement("li");
let listaArticulos = document.getElementById("listaArticulos");

function mostrarProductos() {
    for (let index = 0; index < datosProductos.length; index++) {
        let contenedorProductos = document.createElement("li");
        contenedorProductos.innerHTML = datosProductos[index].descripcion;
        listaArticulos.appendChild(contenedorProductos);
        let butonAgregar = document.createElement("span");
        
    }
}

mostrarProductos();

let suma = 0;
let count = 0;

for (let index = 1; index <= 5; index++) {      
    let valorIngresado =  parseInt(prompt('Ingrese el valor ' + index));
    suma += valorIngresado;
    count = index;
}

console.log('El promedio es ' + getPromedio(suma, count) );

function getPromedio (promSuma, promCount){
    let promedio = (promSuma / promCount);
    return promedio;
}
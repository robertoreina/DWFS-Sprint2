let arreglo = [10, 5, 5, 3, 2, 1, 4, 33];
let promedio = numeros =>{
    let resultado = 0;

    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];  
    }
    return resultado/arreglo.length;
}

let mensaje = new c;
console.log('El promedio es: ' + promedio(arreglo));
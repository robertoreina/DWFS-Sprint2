// let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// let myArray = myData.split(',');
// let cadena = myArray.join(' * ');

// console.log('mydata:' + myData);
// console.log('myArray:' + myArray.length);
// console.log('cadena:' + cadena, cadena.length);


//ejerecicio #1

let index = 0;
let numeros = [];

 while (true){
    let valorIngresado = prompt('Favor ingrese un numero') ;
   
    if (valorIngresado.toLowerCase() === 'stop') {
         break
     } else {
         if (parseInt(valorIngresado)) {
             numeros[index] = parseInt(valorIngresado);
             index++;
         } else {
            alert('Error: Debe ingresar un numero o ingresar stop');
            continue;
         }
     }    
 }

if (numeros.length > 0) {
    console.log('Los numeros ingresados fueron ' + numeros);
} else{
    console.log('No se ingresaron numeros');
}

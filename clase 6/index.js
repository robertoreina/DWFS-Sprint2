let usuarios = [];


while (true) {
   let nombreIn = prompt('Por favor ingrese un nombre o ingrese salir')
   
   if (nombreIn === 'salir') {
       break
   } else if (almacenaUsuario(nombreIn)) {
       alert('Bienvenido ' + nombreIn)
       console.log(usuarios);
   } else {
       alert('Nombre ya existe')
   }
}

function almacenaUsuario(value) {
    try {
        if (usuarios.indexOf(value) < 0 ) {
            usuarios.push(value);
            return true
        } else {
            throw new Error('El usuario existe')
        }
    } catch (error) {
        return false;
    }
}
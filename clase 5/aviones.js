class Aviones {
    // constructor(marca, modelo){
    //     this.marca = marca;
    //     this.modelo = modelo;
    // }

    get motores (){
        return this._motores;
    }

    set motores (value){
        this._motores = value;
    }

     planear (velocidad, altitud) {
        console.log('el avion marca ' + this.marca + ' modelo ' + this.modelo + ' esta Planeando a una velocidad de ' + velocidad + ' y una altitud de ' + altitud)           
    }
}

// let avion = new Aviones('boing', '747');
// let avion2 = new Aviones('airbus', 'A380');

let avion1 = new Aviones;
let avion2 = new Aviones;

avion1.motores = 4;
avion1.marca = 'Boing';
avion1.modelo = '747';
avion2.motores = 2;
avion2.marca = 'Airbus';
avion2.modelo = 'A380';

avion1.planear(950, 12000);
avion2.planear(1100, 13000);

console.log(avion2.motores)

// console.log(avion.marca)
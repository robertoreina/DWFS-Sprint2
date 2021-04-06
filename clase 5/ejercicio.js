class Mascotas {
    get raza (){
        return this._raza;
    }

    set raza (value) {
        this._raza = value;
    }

    get edad (){
        return this._edad;
    }

    set edad (value) {
        this._edad = value;
    }

    get peso () {
        return this._peso;
    }

    set peso (value) {
        this._peso = value;
    }

    get altura () {
        return this._altura;
    }

    set altura (value) {
        this._altura = value;
    }


    get enAdopcion (){
        return this._enAdopcion;
    }

    set enAdopcion (value) {
        this._enAdopcion = value;
    }

    get enProceso (){
        return this._enProceso;
    }

    set enProceso (value) {
        this._enProceso = value;
    }
    get adoptado (){
        return this._adoptado;
    }

    set adoptado (value) {
        this._adoptado= value;
    }


}

let perro1 = new Mascotas();
perro1.raza = 'Labrador';
perro1.edad= 4;
perro1.peso = 9.8;
perro1.altura = 90;
perro1.adoptado = undefined
perro1.enAdopcion = true;
perro1.enProceso = true;

let perro2 = new Mascotas();
perro2.raza = 'Pastor Aleman';
perro2.edad= 1;
perro2.peso = 3.1;
perro2.altura = 30;
perro2.adoptado = undefined;
perro2.enAdopcion = true;
perro2.enProceso = true;

console.log(perro2.raza, perro2.adoptado)

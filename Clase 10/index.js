window.onload = function () {

    // function restar(n1, n2, callback) {
    //     let total = n1 - n2;
    //     callback(total);
    // }

    // function mostrarResultado(resultado) {
    //     console.log(`Resta: ${resultado}`);
    // }

    // restar(5, 3, mostrarResultado);

    // //Division inline
    // function dividir(n1, n2, callback) {
    //     let total = n1 / n2;
    //     callback(total);
    // };

    // dividir(10, 2, (resultado) => {
    //     console.log(`La división es: ${resultado}`);
    // })

    //Operaciones
    function operaciones(n1, n2, operacion, callback) {
        let total;

        switch (operacion.toLowerCase()) {
            case "suma":
                total = `La suma es: ${n1 + n2}`;
                break;
            case "resta":
                total = `La Resta es: ${n1 - n2}`;
                break;
            case "multiplicacion":
                total = `La Multiplicación  es: ${n1 * n2}`;
                break;
            case "division":
                total = `La División es: ${n1 / n2}`;
                break;
            default:
                total = "Operacion Incorrecta";
        };

        return callback(total);
    };

    // operaciones(9, 8, "SUMA", (resultado) => {
    //     console.log(resultado);
    // })

    console.log(
        operaciones(9, 8, "SUMA", (resultado) => {
            return resultado;
        })
    )



}

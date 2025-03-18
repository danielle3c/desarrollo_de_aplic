console.log("Funcionando correctamente...");


function Suma_indices() {
    const arreglo = [1, 2, 3, 4, 5, 6, 7];
    const primerValor = arreglo[0];
    const penultimoValor = arreglo[arreglo.length - 2];
    const ultimoValor = arreglo[arreglo.length - 1];
    const resultado = ultimoValor + penultimoValor + primerValor;
    alert("El resultado de la suma es: " + resultado);
}


function Producto_pares() {
    const arreglo = [2, 4, 6, 8, 10, 12];
    let producto = 1;


    for (let i = 0; i < arreglo.length; i++) {
        producto *= arreglo[i];
    }

    alert("El producto de los valores pares es: " + producto);
}


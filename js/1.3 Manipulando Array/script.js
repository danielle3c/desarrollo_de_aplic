console.log("Funcionando correctamente...");


function Suma_indices() {
    let Array = [1, 2, 3, 4, 5, 6, 7];
    let suma = Array[0] + Array[1] + Array[2] + Array[3] + Array[4] + Array[5] + Array[6];
    alert(`El arreglo es: ${Array.join("-")}\nResultado: ${suma}`);
}


function Producto_pares() {
    let arreglo = [2, 4, 6, 8, 10, 12];
    let producto = arreglo[0] * arreglo[1] * 
    arreglo[2] * arreglo[3] * 
    arreglo[4] * arreglo[5];
    alert(`El array es: ${arreglo.join("_")}\nEl producto de los valores pares es: ${producto}`);
}



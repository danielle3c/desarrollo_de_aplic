console.log("Funcionando correctamente...");


function Suma_indices() {
    let Array = [1, 2, 3, 4, 5, 6, 7];
    let suma = Array[0] + Array[1] + Array[2] + Array[3] + Array[4] + Array[5] + Array[6];
    alert(`El arreglo es: ${Array.join("-")}\nResultado: ${suma}`);
}


function Producto_pares() {
    const arreglo = [2, 4, 6, 8, 10, 12];
    let producto = 1;


    for (let i = 0; i < arreglo.length; i++) {
        producto *= arreglo[i];
    }

    alert("El producto de los valores pares es: " + producto);
}


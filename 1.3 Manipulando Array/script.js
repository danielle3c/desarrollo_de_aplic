console.log("Funcionando correctamente..."); 


function Suma_indices() {
    const arreglo = [1, 2, 3, 4, 5, 6, 7];
    const primerValor = arreglo[0]; 
    const penultimoValor = arreglo[arreglo.length - 2]; 
    const ultimoValor = arreglo[arreglo.length - 1];
    const resultado = ultimoValor + penultimoValor + primerValor;
    alert("El resultado de la suma es: " + resultado);
}

// Función Producto_pares simplificada
function Producto_pares() {
    const arreglo = [2, 4, 6, 8, 10, 12]; // Arreglo de valores pares
    let producto = 1; // Inicializar el producto

    // Recorrer el arreglo y multiplicar todos los valores
    for (let i = 0; i < arreglo.length; i++) {
        producto *= arreglo[i]; // Multiplicar directamente
    }

    // Mostrar el resultado en un alert
    alert("El producto de los valores pares es: " + producto);
}


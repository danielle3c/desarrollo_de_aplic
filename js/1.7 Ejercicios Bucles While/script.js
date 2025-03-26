console.log("Funcionando correctamente...");


function del_1_al_5() {
    let i = 1;
    let array = [];  // Usamos 'array' para almacenar los números
    while (i <= 5) {
        array.push(i);  // Agregamos 'i' al array
        i++;  // Incrementamos 'i'
    }
    alert('Los números son: ' + array.join(", "));  // Mostramos los números en el alert
}

function cuenta_regresiva_del_10_al_1() {
    let count = 10;
    let array = [];  // Usamos 'array' con minúscula
    while (count >= 1) {
        array.push(count);  // Agregamos 'count' al array
        count--;  // Decrementamos 'count'
    }
    alert('Los números son: ' + array.join(", "));  // Mostramos los números en el alert
}

function sumar_los_primeros_5_numeros() {
    let array = [];  // Usamos un array para almacenar los números
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        array.push(i);  // Agregamos 'i' al array
        suma += i;  // Sumamos 'i' a la variable suma
    }
    alert("La suma de los números del 1 al 5 es: " + suma + "\nLos números son: " + array.join(", "));
}

function imprimir_los_multiplos_2_del_1_al_10() {
    let array = [];  // Usamos un array para almacenar los múltiplos de 2
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            array.push(i);  // Agregamos el múltiplo de 2 al array
        }
    }
    alert("Los múltiplos de 2 entre 1 y 10 son: " + array.join(", "));
}

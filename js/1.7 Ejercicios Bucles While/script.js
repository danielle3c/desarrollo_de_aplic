console.log("Funcionando correctamente...");

function del_1_al_5() {
    let contador = 1;
    while (contador <= 5) {
        console.log(contador);
        contador++;
    }
}

function cuenta_regresiva_del_10_al_1() {
    let contador = 10;
    while (contador >= 1) {
        console.log(contador);
        contador--;
    }
}

function sumar_los_primeros_5_numeros() {
    let suma = 0;
    let contador = 1;
    while (contador <= 5) {
        suma += contador;
        contador++;
    }
    console.log("La suma de los números del 1 al 5 es: " + suma);
}

function imprimir_los_multiplos_2_del_1_al_10() {
    let contador = 1;
    while (contador <= 10) {
        if (contador % 2 === 0) {
            console.log(contador);
        }
        contador++;
    }
}



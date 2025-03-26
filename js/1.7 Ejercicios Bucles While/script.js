console.log("Funcionando correctamente...");

function del_1_al_5() {
    let i = 1;
    let array = [];
    while (i <= 5) {
        array.push(i);
        i++;
    }
    alert('Los números son: ' + array.join(", "));
}

function cuenta_regresiva_del_10_al_1() {
    let count = 10;
    let array = [];
    while (count >= 1) {
        array.push(count);
        count--;
    }
    alert('Los números son: ' + array.join(", "));
}

function sumar_los_primeros_5_numeros() {
    let array = [];
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        array.push(i);
        suma += i;
    }
    alert("La suma de los números del 1 al 5 es: " + suma + "\nLos números son: " + array.join(", "));
}

function imprimir_los_multiplos_2_del_1_al_10() {
    let array = [];
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    alert("Los múltiplos de 2 entre 1 y 10 son: " + array.join(", "));
}

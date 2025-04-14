//creacion de variables
console.log("todo bien");


//ejercicio 1:
function calcular_suma_de_n_primeros_numeros_naturales() {
    let n = parseInt(prompt("Ingrese un numero:"));
    let array = [];
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        array.push(i);
        suma += i;
    }
    alert(`La suma de los primeros ${n} numeros naturales es:\n ${suma}`);
    alert(`Los primeros ${n} numeros naturales son:\n ${array.join(" -")}`);
}


//ejercicio 2:
function escribir_100_primeros_numeros_pares() {
    let array = [];
    for (let n = 1; n <= 200; n++) {
        if (n % 2 == 0) {
            array.push(n);
        }
    }
    alert(`Los primeros 100 numeros pares son:\n ${array.join(" -")}`);
}


//ejercicio 3:
function escribir_100_primeros_numeros_impares() {
    let array = [];
    for (let n = 1; n <= 200; n++) { 
        if (n % 2 != 0) {
            array.push(n);
        }
    
    alert(`Los primero 100 numeros impares son:\n ${array.join(" - ")}`);
}
    }


//ejercicio 4: 
function sumar_5_numeros_leidos_teclado() {
    let array = [];
    let suma = 0;
for (let i = 1; i <= 5; i++) {
        n= parseInt(prompt(`Ingrese el número ${i}:`));
        array.push(n);
        suma += n;

    }
alert(`Los números ingresados son:\n ${array.join(" - ")}`);
}
//ejercicio 5:
function modificar_anterior_permita_sumar_n_numeros() {
    let n = parseInt(prompt("¿Cuántos números desea sumar?"));
    while (isNaN(n) || n <= 0) {
        n = parseInt(prompt("Entrada inválida. Ingrese un número mayor a 0:"));
    }
    let array = [];
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`));
        while (isNaN(num)) {
            num = parseInt(prompt(`Entrada inválida. Ingrese el número ${i + 1} nuevamente:`));
        }
        array.push(num);
        suma += num;
    }
    alert(`La suma de los ${n} números es: ${suma}\nNúmeros ingresados: ${array.join(" - ")}`);
}
//ejercicio 6:
function leer_2_numeros_solicitar_usuario_ingrese_la_sumar_multipricar_restar_dividir() {
    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));
    let opcion = prompt("Elija una operación:\n1 - Sumar\n2 - Restar\n3 - Multiplicar\n4 - Dividir");
    if (isNaN(num1) || isNaN(num2)) {
        alert("Uno o ambos valores ingresados no son válidos.");
        return;
    }
    let resultado;
    if (opcion === "1") {
        resultado = num1 + num2;
    } else if (opcion === "2") {
        resultado = num1 - num2;
    } else if (opcion === "3") {
        resultado = num1 * num2;
    } else if (opcion === "4") {
        if (num2 === 0) {
            alert("No se puede dividir por cero.");
            return;
        }
        resultado = num1 / num2;
    } else {
        alert("Opción inválida.");
        return;
    }
    alert(`El resultado es: ${resultado}`);
}


//ejercicio 7:
function sumar_n_numero_pares() {
    let n = parseInt(prompt("¿Cuantos numeros pares desea ingresar?"));
    let array = [];
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el numero ${i + 1}:`));
        while (isNaN(num) || num % 2 !== 0) {
            num = parseInt(prompt(`Entrada ivalida. Ingrese un numero par:`));
        }
        array.push(num);
    }
    alert(`Los numeros pares ingresados son:\n ${array.join(" - ")}`);
    alert(`La suma de los numeros pares ingresados es:\n ${array.reduce((a, b) => a + b, 0)}`);
} //tu lo ingresas todos los numeros pares


//ejercicio 8:
function sumar_n_primeros_los_pares() {
    let n = parseInt(prompt("¿Cuantos numeros pares desea ingresar?"));
    let array = [];
    let suma = 0;
} //te da los primeros numeros que tu ingreses


//ejercicio 9:
function sumar_n_numero_impares() {
    let n = parseInt(prompt("¿Cuantos numeros impares desea ingresar?"));
    let array = [];
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el numero ${i + 1}:`));
        while (isNaN(num) || num % 2 === 0) {
            num = parseInt(prompt(`Entrada invalida. Ingrese un numero impar:`));
        }
        array.push(num);
    }
    alert(`Los numeros impares ingresados son:\n ${array.join(" - ")}`);
}




//ejercicio 10:
function sumar_n_primeros_impares() {
    let n = parseInt(prompt("cuantos numeros inpares desea ingresar"));
    let array = [];
    let impar = 1;
    for (let i = 0; i < n; i++) {
        array.push(impar);
        impar += 2;
    }
    alert(`Los primeros ${n} numeros impares son:\n ${array.join(" - ")}`);
}


//ejercio11:
function sumar_n_primeros_multiplos_3() {
    let n = parseInt(prompt("¿Cuántos números múltiplos de 3 deseas ingresar?"));
    let array = [];
    let multiplo = 3;
    for (let i = 0; i < n; i++) {
        array.push(multiplo);
        multiplo += 3;
    }

    alert(`Los primeros ${n} números múltiplos de 3 son:\n${array.join(" - ")}`);
}

//ejercio12:
function diagrama_flujo_calcule_el_factorial_de_n() {
    let n = parseInt(prompt("ingrese un numero para calcular su factorial"));
    let factorial = 1;
    let array = [];
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        array.push(i);
    }
    alert(`El factorial de ${n} es:\n ${factorial}`);
    alert(`Los numeros que multiplicamos son:\n ${array.join(" *")}`);
}

//ejercio13:
function conversion_grados_celsius_fahrenheit() {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
    if (!Number.isFinite(celsius)) {
        alert("Por favor, ingresa un valor numérico válido.");
        return;
    }
    let fahrenheit = celsius * 9 / 5 + 32;
    let array = [];
    for (let i = 0; i <= celsius; i++) {
        array.push(i);
    }
    alert(`La temperatura en grados Fahrenheit es:\n${fahrenheit}`);
}


//ejercicio14:


//ejercicio15:

// ejercicio16:




//ejercio17:
function ingresar_n_valores_imprimir_solo_pares() {

    let n = parseInt(prompt("¿Cuántos valores quieres ingresar?"));
    let array = [];
    for (let i = 0; i < n; i++) {
        let valor = parseInt(prompt(`Ingresa el valor ${i + 1}:`));
        if (valor % 2 === 0) {
            array.push(valor);
        }
    }
    alert("Los números pares ingresados son:\n" + array.join(", "));
}


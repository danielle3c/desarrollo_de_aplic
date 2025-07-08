function calcularPromedio() {
    let notas = [];
    let suma = 0;

    for (let i = 1; i <= 5; i++) {
        let nota = parseFloat(prompt(`Ingresa la nota ${i} (entre 1.0 y 7.0):`));

        if (isNaN(nota) || nota < 1 || nota > 7) {
            alert("Nota inválida. Debe ser entre 1.0 y 7.0");
            i--; // vuelve a pedir la nota
        } else {
            notas.push(nota);
            suma += nota;
        }
    }

    let promedio = suma / notas.length;
    alert(`El promedio es ${promedio.toFixed(2)}`);

    if (promedio >= 4.0) {
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
}


function separarNumeros() {

    let numeros = [];
    let pares = [];
    let impares = [];

    // Pedir 6 números al usuario
    for (let i = 1; i <= 6; i++) {
        let numero = parseInt(prompt(`Ingresa el número ${i}:`));

        if (isNaN(numero)) {
            alert("Eso no es un número válido. Intenta de nuevo.");
            i--; // repetir el intento
        } else {
            numeros.push(numero);
        }
    }

    // Clasificar en pares e impares
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    // Mostrar resultados en la consola
    console.log("Números pares:", pares);
    console.log("Números impares:", impares);
}


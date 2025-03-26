console.log("Funcionando correctamente...");

function Par_o_Impar() {
    let numero = parseInt(prompt("Introduce un número"));

    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        return;
    }

    if (numero % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
}

function calcula_indice_corporal() {
    let peso = parseFloat(prompt("Introduce tu peso "));
    let altura = parseFloat(prompt("Introduce tu altura"


    ));

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, introduce valores válidos.");
        return;
    }
    let indice = peso / (altura * altura);

    if (indice < 18.5) {
        alert("Bajo peso");
    } else if (indice >= 18.5 && indice <= 24.9) {
        alert("Peso normal");
    } else if (indice >= 25 && indice <= 29.9) {
        alert("Sobrepeso");
    } else {
        alert("Obesidad");
    }
}


function calculadora_de_notas() {
    let nota1 = parseFloat(prompt("introduce la primera nota"));
    let nota2 = parseFloat(prompt("introduce la segunda nota"));
    let nota3 = parseFloat(prompt("introduce la tercera nota"));
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 4.0) {
        alert("aprobado");
    } else {
        alert("reprobado");
    }
}

console.log("Funcionando correctamente...");

function tabla_multiplicar_personalizada() {
    let numero = parseInt(prompt("Introduce un número para la tabla de multiplicar"));
    let limite = parseInt(prompt("Introduce el límite de la tabla de multiplicar"));
    let resultados = [];
    
    alert(`Tabla de multiplicar del ${numero} hasta el ${limite}:`);
    for (let i = 1; i <= limite; i++) {
        let resultado = numero * i;
        resultados.push(`${numero} * ${i} = ${resultado}`);
    }
    alert(resultados.join("\n"));
    alert(`Total de resultados: ${resultados.length}`);
}


function suma_N_numeros_ingresados_por_usuarios() {
    let n = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let numeros = [];
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        let numero = parseFloat(prompt(`Introduce el número ${i}:`));
        numeros.push(numero);
        suma += numero;
    }

    alert(`La suma es ${suma}`);
    alert(`Los números son: ${numeros.join(" - ")}`);
    alert(`Total de números ingresados: ${numeros.length}`);
}

function mostrar_numeros_pares_entre_dos_valores_dados() {
    let valor1 = parseInt(prompt("introduce el primer valor"));
    let valor2 = parseInt(prompt("introduce el segundo valor"));
    let array = [];
    for (let count = valor1 ; count <= valor2; count++){
        if (count % 2 == 0) {
            array.push(count);
        } 
    }
    alert("los numeros son:" + array.join("-"));
    alert("total de numeros pares:" + array.length);
    


}


console.log("Funcionando correctamente...");
function temperatura() {
    let temperatura = parseInt(prompt("Introduce la temperatura actual en grados Celsius."));

    if (temperatura < 0) {
        alert("Hace mucho frío");
    } else if (temperatura >= 0 && temperatura < 25) {
        alert("Está agradable el clima");
    } else {
        alert("Hace mucho calor");
    }
}

    function verificacion() {
        let usuario = "usuario123";
        let contraseña = "secreto";
    
        let respuesta1 = prompt("Introduce tu usuario");
        let respuesta2 = prompt("Introduce tu contraseña");
    
        if (usuario === respuesta1 && contraseña === respuesta2) {
            alert("Acceso concedido");
        } else {
            alert("Acceso denegado");
        }
    }

    function determinar_signo() {
        let numero = parseInt(prompt("Introduce un número"));
    
        if (numero < 0) {
            alert("El número es negativo");
        } else if (numero > 0) {
            alert("El número es positivo");
        } else {
            alert("El número es cero");
        }
    }

    function evaluacion_puntaje() {
        let puntuacion = parseInt(prompt("Introduce tu puntuación:"));
        if (puntuacion >= 90) {
            alert("Excelente");
        } else if (puntuacion >= 70 && puntuacion < 90) {
            alert("Buen trabajo");
        } else {
            alert("Necesitas mejorar");
        }
    }
    


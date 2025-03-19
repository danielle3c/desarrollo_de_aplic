console.log("Funcionando correctamente...");
function temperatura() {
    let temperatura = parseInt(prompt("introduce la temaperatura actual en grado celcius."));
    if (temperatura <0) {
        alert("hace mucho frio");
    }
    if (temperatura >=0 && temperatura <25) {
        alert("esta agradable el clima");
    } else {
        alert ("hace mucho calor");
    }
    
        alert("esta agradable el clima");
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

    



console.log("Funcionando correctamente...");


function verificarNumero() {
    let edad = parseInt(prompt("introduce tu edad"));
    let aceptarterminos = (prompt("aceptas los terminos y condiciones? si/no"));
    if (edad >= 18 && aceptarterminos === "si") {
        alert("acceso concedido");
    } else {
        alert("acceso denegado");
    }
}


function elegibilidad_para_descuento() {
    let edad = parseInt(prompt("intoduce tu edad"));
    let estudiente = prompt("eres estudiante? si/no");
    if (edad <= 18 || edad >= 35 || estudiente === "si") {
        alert("tiene derecho a descuento");
    } else {
        alert("no tiene derecho a descuento");
    }
}


function validacion_usuario_con_not() {
    let usuario = prompt("introduce tu usuario");
    let contraseña = prompt("intoduce tu contraseña");
    if (usuario !== "usuario" || contraseña !== "contraseña") {
        alert("acceso concedido");
    } else {
        alert("acceso denegado");

    }
}

function encendido_de_una_maquina() {
    let energiaSuficiente = prompt("hay suficiente energia? si/no") === "si";
    let interruptorencendido = prompt("esta encendido el interruptor? si/no") === "si";
    if (energiaSuficiente && interruptorencendido){
        alert("maquina encendida");
    } else{
        alert("maquina apagada");
    }
}


function acceso_restrigido_estado_seriguridad() {
    let bloqueado = prompt("esta bloquedo el sistema? si/no");
    let tienecredenciales = prompt("tiene credenciales? si/no").toLocaleLowerCase() === "si";
    if (bloqueado === "no" && tienecredenciales) {
        alert("acceso concedido");
    } else {
        alert("acceso denegado");
    }
    
    }






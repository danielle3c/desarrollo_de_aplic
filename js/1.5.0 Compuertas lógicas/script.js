console.log("Funcionando correctamente...");


function verificarNumero() {
    let edad = parseInt(prompt("introduce tu edad"));
let aceptarterminos = (prompt("aceptas los terminos y condiciones? si/no"));
if (edad >= 18 && aceptarterminos === "si"){
    alert("acceso concedido");
}else {
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
        alert ("acceso concedido");
    } else {
        alert("acceso denegado");
        
    }
}


function acceso_restrigido_estado_seriguridad(){
    
}




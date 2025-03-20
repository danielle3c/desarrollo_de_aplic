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




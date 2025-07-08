let compras = []; // arreglo global para que ambos ejercicios trabajen sobre el mismo

// Ejercicio 1: push()
document.querySelectorAll("button")[0].addEventListener("click", function () {
    compras.push("pan", "leche", "huevos");
    document.getElementById("resultado1").innerText = "Compras: " + compras.join(", ");
});

// Ejercicio 2: pop()
document.querySelectorAll("button")[1].addEventListener("click", function () {
    let eliminado = compras.pop();
    document.getElementById("resultado2").innerText = "Eliminado: " + eliminado + "\nCompras actuales: " + compras.join(", ");
});

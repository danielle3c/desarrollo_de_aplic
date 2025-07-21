let listacompras = [];

function agregarelemetocompra() {
    let elemento = document.getElementById("lista").value;

    // Agregar a la lista de compras
    listacompras.push(elemento);

    // Crear un nuevo <li> y agregarlo al <p id="resultado">

    let silenhill = document.createElement("li");
    silenhill.innerText = elemento;

    let resultado = document.getElementById("resultado");
    resultado.appendChild(silenhill);

    // Mostrar en consola
    console.log(elemento);
}

function quitarUltimoElemento() {
    // Verifica si hay elementos para eliminar
    if (listacompras.length > 0) {
        let eliminado = listacompras.pop(); // quitar el último
        document.getElementById("eliminado").innerText = "Producto eliminado: " + eliminado;

        // También puedes actualizar la lista en pantalla si lo deseas
        let resultado = document.getElementById("resultado");
        resultado.removeChild(resultado.lastElementChild);
    } else {
        document.getElementById("eliminado").innerText = "No hay productos para eliminar.";
    }
}


let colores = [];

function mostrarColores() {
  document.getElementById("coloresLista").innerText = "Colores: " + colores.join(", ");
}

function agregarColorAlInicio() {
  let nuevoColor = document.getElementById("inputColor").value.trim();
  if (nuevoColor !== "") {
    colores.unshift(nuevoColor);
    document.getElementById("inputColor").value = ""; // limpiar input
    mostrarColores();
  }
}

function quitarPrimerColor() {
  if (colores.length > 0) {
    let eliminado = colores.shift();
    document.getElementById("colorEliminado").innerText = "Color eliminado: " + eliminado;
    mostrarColores();
  } else {
    document.getElementById("colorEliminado").innerText = "No hay colores para eliminar.";
  }
}


console.log("todo bien");
function registro_de_pricipiante(){
// Crear un arreglo vacío llamado participantes
let participantes = [];
// Pedir al usuario que ingrese nombres hasta que escriba "salir"
let nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");

while (nombre.toLowerCase() !== "salir") {
    // Agregar el nombre al arreglo
    participantes.push(nombre);
    //pidera el sigueinte nombre para la lista 
    nombre = prompt("Ingrese otro nombre (escriba 'salir' para terminar):");
    }
    //pondra el total de los participantes en numeros en la consola 
    console.log('el total de los parcipates es: ' + participantes.length);
//pondra en una lista los nombres de participantes separado con una coma 
    console.log('los participantes son: ' + participantes.join(', '));  
    //verificara si son mas de 5 parcipantes 
    if (participantes.length > 5)
    
{
    //}si mas de 5 parcipante spondra el mensaje felicitando qie son mas 5 en participar 
    console.log ("¡excelente participacion tenemos mas de 5 participantes!");
}
}



function simulador_de_caja() {
    // Crear un arreglo con productos iniciales
    let productos = ["manzana", "pan", "leche"];

    // Simular el paso de 5 clientes
    for (let i = 0; i < 5; i++) {
        if (productos.length > 0) {
            let productoVendido = productos.pop();
            console.log(`Producto vendido: ${productoVendido}`);
        } else {
            console.log("Sin stock");
        }
    }
// Reponer productos ingresados por el usuario
    let cantidad = prompt("¿Cuántos productos deseas reponer?");
    cantidad = parseInt(cantidad);

    for (let i = 0; i < cantidad; i++) {
        let nuevoProducto = prompt(`Ingresa el nombre del producto #${i + 1}:`);
        productos.push(nuevoProducto);
    }

    console.log("Productos repuestos:", productos);
}


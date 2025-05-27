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



function registro_de_productos() {
// Crear un arreglo con productos iniciales
let productos = ["manzana", "pan", "leche"];

// Simular 5 pasos de clientes
for (let i = 0; i < 5; i++) {
    // Verificar si hay productos disponibles
    if (productos.length > 0) {
        // Vender el último producto (usando pop)
        let productoVendido = productos.pop();
        console.log(`Producto vendido: ${productoVendido}`);
    } else {
        console.log("Sin stock");
    }
}
}

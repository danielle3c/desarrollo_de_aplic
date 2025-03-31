//creacion de variables
console.log("todo bien");


//ejercicio Bucle while: Imprimir del 1 al 5
function del_1_al_5() {

    let count = 1; // cotar desde 1
    let array = []; //array es una lista de numeros
    while (count <= n){ // minetras cotador sea menor o iguale el numero
        array.push(count); //inserte datos 
        count++; //incremneta 1 al contador 
    }
    alert(`los numeros son ${array.join(" -")}`); //muestra el resultado
}


//ejercicio Bucle while: Cuenta regresiva del 10 al 1
function cuenta_regresiva_del_10_al_1() { //fuction es funcion
    let count = 10; //contador de 10 
    let array = []; //array lista de elementos
    while (count >= 1){
        array.push(count); //inserta datos en el array
        count--; //dreceta el contador
    }
    alert(`los numeros son ${array.join(" - ")}`);
}


//ejercicio Bucle for: Sumar los primeros 5 números
function sumar_los_primeros_5_numeros() { 
    let suma = 0; // inicia la suma con 0 
    for (let i = 1; i <= 5; i++){ // inicia el contador de 1 hasta 5
        suma += i; // suma el contador a la variable suma 
    }
    alert(`La suma de los primeros 5 numeros es ${suma}`); // mmuestra el resultado 
}


//ejercicio Bucle for: Imprimir múltiplos de 2 del 1 al 10
function imprimir_los_multiplos_2_del_1_al_10() {
    let array = []; //array en la lista de elementos
    for (let i = 1; i <= 10; i ++){ // inicia el contador de 1 a 10
        if (i % 2 == 0){ // guarda las sobras de loa division
            array.push(i); // inserta los numeros array 
            alert(`los numeros son ${array.join(" -")}`); //muestra el resultodo
        }
    }
}
    //ejercicio 2:
function MostrarPares() {
    let array = [];
    for(let n = 1; n <= 200; n++){
        if(n % 2 == 0){
            array.push(n);
        }
    }
    alert(`Los primeros 100 numeros pares son:\n ${array.join(" -")}`);
}


//ejercicio 3:
    function Mostrarimpares() {
        let array = []; 
        for(let n = 1; n <= 200; n++){ //genera un bucle que llega hasta 200
            if(n % 2 == 1){ 
                array.push(n);  
            } 
        }
        alert(`Los primero 100 numeros impares son:\n ${array.join(" - ")}`);
    }
    
    
    
    
    
    function sumar_n_numero_pares() {
        let n = parseInt(prompt("Ingrese cuántos números pares desea sumar:")); //validar sea un numero
        let suma = 0;
        let numerosPares = [];
    
        for (let i = 1; i <= n; i++) { // desde 1 has el numero que se agrega
            let num = parseInt(prompt(`Ingrese el número ${i} de ${n}: `));//balidara el numero
    
            // Mientras el número no sea válido o no sea par, seguir pidiendo un número
            while (isNaN(num) || num % 2 !== 0) { //validar que sea par
                alert("El número ingresado no es válido o no es par. Intente nuevamente.");
                num = parseInt(prompt(`Ingrese el número ${i} de ${n}: `));//validara el numero
            }
            numerosPares.push(num);// agregara el el numero a la listade los pares
            suma += num;// sumar los numeros pares
        }
        alert(`Los números pares ingresados fueron: ${numerosPares.join(", ")}`); //mostrara los numeros pares ingresado
        alert(`La suma de los números pares es: ${suma}`);// mostrara la suma de los numeros pares
    }

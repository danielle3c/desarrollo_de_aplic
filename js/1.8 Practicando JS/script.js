    //ejercios1
    function calcular_suma_de_n_primeros_numeros_naturales(){
        let n = parseInt(prompt("ingrese un numero"));
        let numeros = [];
        let suma = 0 ;
        for (let i = 1; i <= n; i++){
            numeros.push(i);
            suma += i;
        }
        alert(`La suma de los primeros ${n} numeros es: ${suma}`);
        alert(`Los numeros son: ${numeros.join(", ")}`); //muestra los numeros en un solo mensaje
        
    }
    
    //ejercicio 2:
function escribir_100_primeros_numeros_pares(){
    let array = [];
    for(let n = 1; n <= 200; n++){
        if(n % 2 == 0){
            array.push(n);
        }
    }
    alert(`Los primeros 100 numeros pares son:\n ${array.join(" -")}`);
}


//ejercicio 3:
    function escribir_100_primeros_numeros_impares(){
        let array = []; 
        for(let n = 1; n <= 200; n++){ //genera un bucle que llega hasta 200
            if(n % 2 == 1){ 
                array.push(n);  
            } 
        }
        alert(`Los primero 100 numeros impares son:\n ${array.join(" - ")}`);
    }
    
    //ejercios 4:
    function sumar_5_numeros_leidos_teclado(){
        let numeros = [];
        let cantidad = 5;
        let suma = 0;
        for (let i = 0; i < cantidad; i++){
            let num = parseInt(prompt(`Ingrese el número ${i + 1} de ${cantidad}: `)); //validar que sea un numero
            while(isNaN(num)){ //validar que sea un numero
                alert("El valor ingresado no es un número válido. Intente nuevamente.");
                num = parseInt(prompt(`Ingrese el número ${i + 1} de ${cantidad}: `)); //validar que sea un numero
            }
            numeros.push(num); //agregar el numero al array
            suma += num; //sumar los numeros
        }
        alert(`Los números ingresados son: ${numeros.join(", ")}`); //muestra los numeros en un solo mensaje    
        alert (`La suma de los números es: ${suma}`); //muestra la suma de los numeros
        
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

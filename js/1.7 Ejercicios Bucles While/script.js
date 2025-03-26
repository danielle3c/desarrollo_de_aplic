console.log("Funcionando correctamente...");


    function del_1_al_5(){
let i = 1;
while (i <= 5) {
    alert(i);
    i++;
}
    }

    function cuenta_regresiva_del_10_al_1(){
        let i = 10;

        while (i >= 1) {
            alert(i); 
            i--;
        }
    }


    function sumar_los_primeros_5_numeros(){
        let suma = 0;
        for (let i = 1; i <= 5; i++) {
            suma += i; 
        }
        alert("La suma de los números del 1 al 5 es: " + suma);
    }


    function imprimir_los_multiplos_2_del_1_al_10() {
        for (let i = 1; i <= 10; i++){
            if (i % 2 === 0) {
                alert (i);
            }
        }
    }
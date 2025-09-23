//crear funcion der prueba this
function example(elemento) {
    console.log("elemento clickeado", elemento);

}

//craer funcion turnoff
function turnOff(element) {
    if (element.innerText === "Off") {
        element.innerText = "On";
        return;
    }
    element.innerText = "Off";
    
}



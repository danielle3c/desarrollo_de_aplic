//crear funcion der prueba this
function example(elemento) {
    console.log("elemento clickeado", elemento);

}

//craer funcion turnoff
function turnOff(element) {
    if (element.innerText === "On") {
        element.innerText = "Off";
        return;
    }
    element.innerText = "On";
    
}



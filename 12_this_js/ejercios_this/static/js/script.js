function liked(elemento) {
    let likeSpan = elemento.querySelector('span');
    let incrementarLikes = parseInt(likeSpan.innerText);
    incrementarLikes = incrementarLikes + 1;
    likeSpan.innerText = incrementarLikes;
}

function login(elemento) {
    if (elemento.innerText === "Login") {
        elemento.innerText = "Logout";
        elemento.style.color = "red"; 
    } else {
        elemento.innerText = "Login"; 
        elemento.style.color = "white";    
    }
}


function hide(elemento) {
    // Oculta el botón.
    elemento.style.display = 'none';  
}

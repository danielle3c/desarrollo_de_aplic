function liked(element) {
    let likeSpan = element.querySelector('span');
    let incrementarLikes = parseInt(likeSpan.innerText);
    incrementarLikes = incrementarLikes + 1;
    likeSpan.innerText = incrementarLikes;
}



function login(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hide(element) {
    // Oculta el botón.
    element.style.display = 'none';
}
function likealert(button) {
    // Buscar el <span> que contiene el número de likes
    const span = button.querySelector('span');

    // Convertir su texto a número y sumar 1
    let likes = parseInt(span.innerText);
    likes++;

    // Actualizar el contenido del <span>
    span.innerText = likes;
}
function toggleLogin(button) {
    if (button.innerText === "Login") {
        button.innerText = "Logout";
        button.style.backgroundColor = "#e74c3c"; // rojo para logout
    } else {
        button.innerText = "Login";
        button.style.backgroundColor = "#3498db"; // azul para login
    }
}
function removeButton(button) {
    button.remove();
}

function toggleLogin(button) {
    if (button.innerText === "Login") {
        button.innerText = "Logout";
    } else {
        button.innerText = "Login";
    }
}

function likealert(button) {
    alert("Ninja was liked!");
    const span = button.querySelector("span");
    let currentLikes = parseInt(span.innerText);
    span.innerText = currentLikes + 1;
}

function removeButton(button) {
    button.remove();
}

// Llamado a todos los videos pequeños
const videos = document.querySelectorAll('.vid-s');

function vistaPrevia(element) {
    element.play();
}

function vistaPreviaPause(element) {
    element.pause();
}

function cambiarVideo(element) {
    const videoMain = document.getElementById("video_main");
    const videoTitle = document.getElementById("video-title"); // Ahora apunta al h1

    // Cambiar el video principal
    videoMain.src = element.src;
    videoMain.play();

    // Cambiar el título visible
    const nuevoTitulo = element.getAttribute("data-title");
    if (videoTitle && nuevoTitulo) { 
        videoTitle.textContent = nuevoTitulo;
    }
}

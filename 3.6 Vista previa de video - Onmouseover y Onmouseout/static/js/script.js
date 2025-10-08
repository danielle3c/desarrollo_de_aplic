// Llamado a todos los videos pequeños
const videos = document.querySelectorAll('.vid-s');

function vistaPrevia(element) {
    element.play();
}

function vistaPreviaPause(element) {
    element.pause();
}


function cambiarVideo(clickedVideo) {
    const videoMain = document.getElementById("video_main");
    const videoTitle = document.getElementById("video-title");

    // Guardar datos del video principal
    const mainSrc = videoMain.src;
    const mainTitle = videoTitle.textContent;

    // Datos del clicado
    const clickedSrc = clickedVideo.src;
    const clickedTitle = clickedVideo.getAttribute("data-title");

    // Cambiar el principal por el clicado
    videoMain.src = clickedSrc;
    videoMain.play();
    videoTitle.textContent = clickedTitle;

    // Intercambiar el src y data-title en la miniatura clicada
    clickedVideo.src = mainSrc;
    clickedVideo.setAttribute("data-title", mainTitle);

    // También actualizar el texto que aparece debajo
    const span = clickedVideo.parentElement.querySelector('.video-title');
    if (span) {
        span.textContent = mainTitle;
    }
}

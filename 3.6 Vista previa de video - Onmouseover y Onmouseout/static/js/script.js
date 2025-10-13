function cambioVideo(elemento){
    const mainVideo = document.getElementById("mainVideo");
    let rutaMainVideo = mainVideo.src;
    let videoPequeno = elemento.src;
    elemento.src = rutaMainVideo;
    mainVideo.src = videoPequeno;

    // Cambio de Texto
    const textoMain = document.getElementById("textoMain");
    let contentTextoMain = textoMain.textContent;
    const textoPequeno = elemento.nextElementSibling; // selecciona el texto del video pequeño
    let contentTextoPequeno = textoPequeno.textContent;

    textoMain.textContent = contentTextoPequeno;
    textoPequeno.textContent = contentTextoMain;
}
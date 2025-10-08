//esta llamdo a todos las vidoes mas pequeños 
const videos = document.querySelectorAll('.vid-s');

function vistaPrevia(element){
    element.play();
}
function vistaPreviaPause(element){
element.pause();
}

//esta funcion cambia el video pricipal al video pequeño
function cambiarVideo(element) {
    //cambia la fuente del video pricipal al video pequeño que se le dio click  
    const videoMain = document.getElementById("video_main");
//   console.log(element.src);
    videoMain.src = element.src;

}
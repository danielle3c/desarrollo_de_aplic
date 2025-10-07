const videos = document.querySelectorAll('.vid-s');

videos.forEach(video => {
    video.addEventListener('mouseover', function () {
        this.play();
    });

    video.addEventListener('mouseout', function () {
        this.pause();
        this.currentTime = 0; 
    });
});

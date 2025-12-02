const miniatura = document.getElementById("miniatura");
    const lightbox = document.getElementById("lightbox");
    const cerrar = document.getElementById("cerrar");
    const video = document.getElementById("video1");

miniatura.onclick = function() {
lightbox.style.display = "block";
video.play();
};

    cerrar.onclick = function() {
      lightbox.style.display = "none";
      video.pause();
      video.currentTime = 0;
    };
    
    window.onclick = function(event) {
      if (event.target === lightbox) {
        lightbox.style.display = "none";
        video.pause();
        video.currentTime = 0;
      }
    };

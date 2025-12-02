  var modal = document.getElementById("myModal");
  var img = document.getElementById("img0");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  var span = document.getElementsByClassName("close")[0];

  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  span.onclick = function() {
    modal.style.display = "none";
  }


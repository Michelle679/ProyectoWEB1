var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var closeBtn = document.querySelector(".close");
var images = document.getElementsByClassName("myImg");

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}
closeBtn.onclick = function() {
  modal.style.display = "none";
}
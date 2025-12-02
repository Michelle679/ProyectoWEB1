window.onload = function() {
  // Imagen inicial
  document.getElementById("output-img").innerHTML =
    "<img src='imagenes/juguet.png' class='img-fluid rounded' alt='logo'/>";

  // Cambio de imagen según selección
  document.getElementById("juguet").onchange = function(e) {
    let n = e.target.value;
    let imagen =
      "<img src='imagenes/bebes/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='' />";
    document.getElementById("output-img").innerHTML = imagen;
  };

  // Botón limpiar
  document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML =
      "<img src='imagenes/juguet.png' class='img-fluid rounded' alt='logo' />";
    document.getElementById("juguet").value = "";
  };
};
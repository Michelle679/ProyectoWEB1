let micarrusel = {};
let foto = 0;
let total = 0;

micarrusel = [{ imageurl: "imagenes/1.jpg", titulo: "Foto #1" },
    { imageurl: "imagenes/2.jpg", titulo: "Foto #2" },
    { imageurl: "imagenes/3.jpg", titulo: "Foto #3" },
    { imageurl: "imagenes/4.avif", titulo: "Foto #4" },
    { imageurl: "imagenes/5.avif", titulo: "Foto #5" },
    { imageurl: "imagenes/6.jpeg", titulo: "Foto #6" },
    { imageurl: "imagenes/7.jpeg", titulo: "Foto #7" },
    { imageurl: "imagenes/8.png", titulo: "Foto #8" },
    { imageurl: "imagenes/9.jpg", titulo: "Foto #9" },
    { imageurl: "imagenes/10.jpeg", titulo: "Foto #10" }
];
let cambiar = function(mas) {
    total = micarrusel.length;
    foto = foto + mas;
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        foto = total;
    }

  document.getElementById("thumb").src = micarrusel[foto - 1].imageurl;
  document.getElementById("titulo").innerText = micarrusel[foto - 1].titulo;
};

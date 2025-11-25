var panorama, viewer, container, infospot;

container = document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('EXAMEN/imagenes/establecimiento.jpeg')

viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);

//ZONAS INTERACTIVAS

//techo
var infospot1 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infospot1.position.set(129, 500, -93);
infospot1.addHoverText('Techo');
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Tapar tubos con cielo razo para tapar los tubos, además se tiene en mente pintar de color negro para hacer la simulación de un espacio o cielo estrellado.</div>';
panorama.add(infospot1);

//COLORES DE PAREDES
var infospot2 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infospot2.position.set(292, 148, -500);
infospot2.addHoverText('color1');
infospot2.element.innerHTML = '<div style="width:50px; height:auto; border-radius: 5px;"><img src="EXAMEN/imagenes/rojo.png"></div>';
panorama.add(infospot2);

var infospot3 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infospot3.position.set(499, 82, -227);
infospot3.addHoverText('color2');
infospot3.element.innerHTML= '<div style="width:50px; height:auto; border-radius: 5px;"><img src="EXAMEN/imagenes/naranjapastel.png"></div>';
panorama.add(infospot3);

var infospot4 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infospot4.position.set(500, 67, -131);
infospot4.addHoverText('color3');
infospot4.element.innerHTML= '<div style="width:50px; height:auto; border-radius: 5px;"><img src="EXAMEN/imagenes/azulclaro.avif"type="img"></div>';
panorama.add(infospot4);

var infospot5 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infospot5.position.set(500, 58, -97);
infospot5.addHoverText('color4');
infospot5.element.innerHTML= '<div style="width:50px; height:auto; border-radius: 5px;"><img src="EXAMEN/imagenes/rosapastel.png"></div>';
panorama.add(infospot5);

//ZONA BIENVENIDA
var infospot6= new PANOLENS.Infospot( 150, 'EXAMEN/imagenes/Bienvenida.png');
infospot6.position.set(-109,160,-500);
panorama.add(infospot6);

var infospot7= new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.addHoverText('Bienvenida');
infospot7.position.set(-121,-14,-500);
infospot7.element.innerHTML= '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="EXAMEN/audios/Bienvenida.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot7);

//ZONA JUGUETES STEAM
var infospot8 = new PANOLENS.Infospot(150,PANOLENS.DataImage.Info);
infospot8.position.set(-360,101,500);
infospot8.addHoverText('Importancia de los juguetes STEAM')
infospot8.element.innerHTML = '<div class="" style=""><iframe width="720" height="480" src="https://www.youtube.com/embed/NDUK0sVccwU"></iframe></div>';
panorama.add(infospot8);

var infospot9=new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot9.addHoverText('JUGUETES STEAM');
infospot9.position.set(-499,190,374);
infospot9.element.innerHTML = '<div style="width:50px; height:auto; border-radius: 5px;"><img src="EXAMEN/imagenes/stem.jpg"></div>';
panorama.add(infospot9);




//ZONA DE JUEGOS DE MESA

var infospot10=new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot10.addHoverText('JUEGOS DE MESA');
infospot10.position.set(-103,159,499);
infospot10.element.innerHTML = '<div style="width:10px; height:auto; border-radius: 5px;"><img src="EXAMEN/imagenes/JM.jpg"></></div>';
panorama.add(infospot10);


//ZONA DE LIBROS

var infospot11=new PANOLENS.Infospot(150, 'EXAMEN/imagenes/libro.png');
infospot11.addHoverText('LIBROS');
infospot11.position.set(-500,179,-200);
infospot11.element.innerHTML = '<div style="width:50px; height:auto; border-radius: 5px;"><img src="EXAMEN/imagenes/LIBROS.jpg"></div>';
panorama.add(infospot11);

//ZONA DE BEBÉS

var infospot12=new PANOLENS.Infospot(100, 'EXAMEN/imagenes/bebe.png');
infospot12.position.set(500,72,-398);
infospot12.addHoverText('BEBES');
infospot12.element.innerHTML =' <div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"></div>';

infospot12.addEventListener('click', function() {
    window.open("EXAMEN/pdf/BEBES.pdf");
});
panorama.add(infospot12);


//ZONA DE CAJAS
var infospot13=new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
infospot13.addHoverText('AREA DE CAJAS');
infospot13.position.set(500,57,23);
panorama.add(infospot13);


  const paquetes = {
    paquete1: { 
      img: '<img  src="imagenes/babys.jpg" alt="Paquete Bebés" class="img-fluid"/>',
      desc: 'Incluye juguetes suaves y seguros para bebés.',
      precio: '₡15,000'
    },
    paquete2: {
      img: '<img src="imagenes/niños.jpg" alt="Paquete Niños" class="img-fluid"/>',
      desc: 'Juguetes divertidos y coloridos para niños de 3 a 7 años.',
      precio: '₡25,000'
    },
    paquete3: {
      img: '<img src="imagenes/educatrivos.jpg" alt="Paquete Educativo" class="img-fluid"/>',
      desc: 'Juguetes didácticos para estimular el aprendizaje.',
      precio: '₡30,000'
    }
  };

  document.getElementById('paquete').addEventListener('change', function() {
    const seleccionado = this.value;
    if (paquetes[seleccionado]) {
      document.getElementById('paquete-img').innerHTML = paquetes[seleccionado].img;
      document.getElementById('paquete-desc').textContent = paquetes[seleccionado].desc;
      document.getElementById('paquete-precio').textContent = paquetes[seleccionado].precio;
      document.getElementById('btn-comprar').style.display = 'inline-block';
    }
  });
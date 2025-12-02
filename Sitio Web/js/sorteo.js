window.addEventListener('load', init, false);

function init() {
  const nombre = document.getElementById('nombreTxt');
  const apellido = document.getElementById('apellidoTxt');
  const email = document.getElementById('emailTxt');
  const numero = document.getElementById('numberTxt');
  const mensaje = document.getElementById('mensajeTxt');
  const alerta = document.getElementById('mensajeAlert');
  const btnEnviar = document.getElementById('btnSend');

  const expressionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  btnEnviar.onclick = function (event) {
    event.preventDefault(); 
    if (!nombre.value || !apellido.value || !email.value || !numero.value || !mensaje.value) {
      alerta.textContent = 'Por favor llene todos los campos.';
      alerta.classList.add('alertaRoja');
      alerta.classList.remove('alertaVerde');
    } else if (!expressionEmail.test(email.value)) {
      alerta.textContent = 'Email inválido.';
      alerta.classList.add('alertaRoja');
      alerta.classList.remove('alertaVerde');
    } else {
      alerta.textContent = 'Mensaje enviado. ¡Pronto le confirmamos!';
      alerta.classList.add('alertaVerde');
      alerta.classList.remove('alertaRoja');

      emailjs.sendForm('service_ubmbmt9', 'template_1gas9uc', '#form1', 'VErNRK6kIm0ihLKED');

      limpiar();
    }
  };

  function limpiar() {
    nombre.value = '';
    apellido.value = '';
    email.value = '';
    numero.value = '';
    mensaje.value = '';
  }
}
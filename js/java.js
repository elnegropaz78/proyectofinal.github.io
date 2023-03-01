const enlacesInternos = document.querySelectorAll('a[href^="#"]');

enlacesInternos.forEach(enlace => {
  enlace.addEventListener('click', function(evento) {
    evento.preventDefault();
    const seccionDestino = document.querySelector(this.getAttribute('href'));
    seccionDestino.scrollIntoView({ behavior: 'smooth' });
  });
});

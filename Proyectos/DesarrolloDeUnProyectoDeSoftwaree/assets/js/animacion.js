document.querySelector('.animate-page').addEventListener('click', function (e) {
    e.preventDefault(); // Evita la redirección predeterminada
  
    // Utiliza GSAP para realizar una animación de salida
    gsap.to('body', {
      opacity: 0,
      duration: 1, // Duración de la animación (ajusta según tus preferencias)
      ease: 'power2.inOut', // Tipo de animación (ajusta según tus preferencias)
      onComplete: function () {
        window.location.href = "Edades.html"; // Redirige a la siguiente página después de la animación
      },
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.animate-on-load');
  
    elementsToAnimate.forEach(function (element) {
      element.classList.add('show');
    });
  });
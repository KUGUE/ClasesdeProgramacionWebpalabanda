document.addEventListener("DOMContentLoaded", function() {
  var sonidoBtn = document.getElementById("sonidoBtn");
  var sonidoImg = document.getElementById("sonidoImg");
  var sonidoActivado = localStorage.getItem("sonidoActivado") === "false";
  function toggleSonido() {
    if (sonidoActivado) {
      sonidoImg.src = "/assets/img/sonidooff.png";
   document.querySelectorAll("audio").forEach(function(audio) { audio.muted = true; });
    } else {
      sonidoImg.src = "/assets/img/sonido.png";
      document.querySelectorAll("audio").forEach(function(audio) { audio.muted = false; });
    }
    sonidoActivado = !sonidoActivado;
    localStorage.setItem("sonidoActivado", sonidoActivado);
  }
  sonidoBtn.addEventListener("click", toggleSonido);
  toggleSonido();
});



var voz = new SpeechSynthesisUtterance();
voz.lang = "es-ES";
voz.volume = 1;

// Define el índice de la voz que deseas utilizar
var voiceIndex = 5; // Este es el índice de "Google español" en el arreglo de voces

var timer = setInterval(function () {
  var voices = speechSynthesis.getVoices();
  if (voices.length !== 0) {
    if (voiceIndex < voices.length) {
      voz.voice = voices[voiceIndex];
      voz.voiceURI = voices[voiceIndex].voiceURI;
      clearInterval(timer);
    }
  }
}, 100);

setTimeout(function () {
  speech();
}, 100);

var vozEnReproduccion = false;
function speechh(vocal) {
  if (!vozEnReproduccion) {
    vozEnReproduccion = true;
    var text = "vocal, " + vocal;
    if (text !== "") {
      voz.text = text;
      window.speechSynthesis.speak(voz);
    }

    voz.onend = function () {
      vozEnReproduccion = false;
    };
  }
}

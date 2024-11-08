const numeros = Array.from({ length: 10000 }, (_, i) => i + 0);
let numeroActual = 0;

const numeroDisplay = document.getElementById("numeroDisplay");
function mostrarNumero() {
  numeroDisplay.textContent = numeros[numeroActual];
}

mostrarNumero();

const botonIzq = document.querySelector(".izq");
const botonDer = document.querySelector(".der");

botonIzq.addEventListener("click", function () {
  if (numeroActual > 0) {
    numeroActual -= 1;
    mostrarNumero();
  }
});

botonDer.addEventListener("click", function () {
  if (numeroActual < numeros.length - 1) {
    numeroActual += 1;
    mostrarNumero();
  }
});


var voz = new SpeechSynthesisUtterance();
voz.lang = "es-ES";
voz.volume = 1;

// Definir la voz que deseas utilizar
var voiceToUse = null;

var timer = setInterval(function () {
  var voices = speechSynthesis.getVoices();
  if (voices.length !== 0) {
    // Busca la voz que deseas utilizar, por ejemplo, por su nombre.
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].name === "Google español") {
        voiceToUse = voices[i];
        break;
      }
    }

    // Si se encontró la voz, configúrala
    if (voiceToUse) {
      voz.voice = voiceToUse;
      voz.voiceURI = voiceToUse.voiceURI;
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
    var text =  vocal;
    if (text !== "") {
      voz.text = text;
      window.speechSynthesis.speak(voz);
    }

    voz.onend = function () {
      vozEnReproduccion = false;
    };
  }
}


// mostrar escrito

document.addEventListener('DOMContentLoaded', function () {
  const numeroDisplay = document.getElementById('numeroDisplay');
  const numeroEscrito = document.getElementById('numeroEscrito');


  function actualizarNumeroEscrito() {
    const numero = numeroDisplay.textContent;

    const numeroEnPalabras = convertirNumeroEnPalabras(numero);
    numeroEscrito.textContent = numeroEnPalabras;
  }


  const observer = new MutationObserver(actualizarNumeroEscrito);
  const config = { childList: true, characterData: true, subtree: true };
  observer.observe(numeroDisplay, config);
});



function convertirNumeroEnPalabras(numero) {
  if (numero < 0 || numero > 10000) {
    return 'Número fuera de rango';
  }

  const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
  const millares = ['', 'mil', 'dos mil', 'tres mil', 'cuatro mil', 'cinco mil', 'seis mil', 'siete mil', 'ocho mil', 'nueve mil'];

  if (numero == 0) {
    return 'cero';
  }

  if (numero < 10) {
    return unidades[numero];
  }

  if (numero < 20) {
    return especiales[numero - 10];
  }
  if (numero == 100) {
    return 'cien';
  } else {

    if (numero < 100) {
      const decena = Math.floor(numero / 10);
      const unidad = numero % 10;
      return decenas[decena] + (unidad > 0 ? ' y ' + unidades[unidad] : '');
    }

    if (numero === 100) {
      return 'cien';
    }

    if (numero < 1000) {
      const centena = Math.floor(numero / 100);
      const resto = numero % 100;
      return centenas[centena] + (resto > 0 ? ' ' + convertirNumeroEnPalabras(resto) : '');
    }

    if (numero <= 10000) {
      const millar = Math.floor(numero / 1000);
      const resto = numero % 1000;
      return millares[millar] + (resto > 0 ? ' ' + convertirNumeroEnPalabras(resto) : '');
    }
  }

}




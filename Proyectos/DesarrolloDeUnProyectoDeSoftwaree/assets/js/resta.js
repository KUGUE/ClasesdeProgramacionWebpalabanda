const idAlmacenado = localStorage.getItem("tarjetaPresionada");
let numeroAleatorio1 = 0;
let numeroAleatorio2 = 0;

const numero = (option) => {
  let obj = {
    1: 1,
    2: 5,
    3: 10,
    4: 15,
    5: 19,
    6: 24,
    7: 27,
    8: 30,
    9: 38,    
    10: 45  
  }
  return obj[option] ?? "Unknown"
}

const miInput = document.getElementById("miInput");

miInput.addEventListener("focus", function () {
  resultadoH1.textContent = "resultado";
  resultadoH1.style.backgroundColor = "transparent";
});
function generarNumerosAleatorios() {
  if (idAlmacenado) {
    console.log("ID almacenado:", idAlmacenado);

    do {
      numeroAleatorio1 = Math.floor(Math.random() * 10) + numero(idAlmacenado);
      numeroAleatorio2 = Math.floor(Math.random() * 10) + numero(idAlmacenado);
    } while (numeroAleatorio1 - numeroAleatorio2 < 0);
  } 

  document.getElementById("escribir").textContent = numeroAleatorio1;
  document.getElementById("escribir2").textContent = numeroAleatorio2;
  console.log(numeroAleatorio1 - numeroAleatorio2);
  return numeroAleatorio1 - numeroAleatorio2;
}


const botonCalcular = document.getElementById("calcularButton");
const resultadoH1 = document.querySelector(".resultado");

let sumaAleatoria = generarNumerosAleatorios();

botonCalcular.addEventListener("click", function () {
  const valorInput = parseInt(document.getElementById("miInput").value);


  if (valorInput === sumaAleatoria) {
    resultadoH1.textContent = "Correcto";
    resultadoH1.style.backgroundColor = "#adff98";
    setTimeout(function () {
      resultadoH1.textContent = "resultado";
      resultadoH1.style.backgroundColor = "transparent";
      miInput.value = "";
      sumaAleatoria = generarNumerosAleatorios();
    }, 2000);
  } else {
    resultadoH1.textContent = "Incorrecto";
    resultadoH1.style.backgroundColor = "#ffa4a4";
  }
}
);
// evita que se pongan letras :)

document.getElementById("miInput").addEventListener("input", function(e) {
  let entrada = e.target.value;
  e.target.value = entrada.replace(/[^-0-9]/g, '');
});

// activar boton con enter
document.getElementById("miInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    document.getElementById("calcularButton").click();
  }
});
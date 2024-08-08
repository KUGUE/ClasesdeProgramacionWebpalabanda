
function Numeros(num1, num2) {
    let suma = num1 + num2;
    return suma;
}

function obtenerYSumarNumeros() {

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let resultado = Numeros(num1, num2);

    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

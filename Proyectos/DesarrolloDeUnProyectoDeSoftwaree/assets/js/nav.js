document.addEventListener('DOMContentLoaded', function () {
    const nav = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Lilita+One&display=swap" rel="stylesheet">
    <script src="/assets/js/sonido.js"></script>
    <input type="checkbox" id="menu-toggle"/>
    <label id="trigger" for="menu-toggle"></label>
    <label id="burger" for="menu-toggle"></label>
    <ul id="menu">
    <link rel="shortcut icon" href="/assets/img/icono.ico">
    <li><a href="/index.html">Inicio</a></li>
    <li><a href="/Edades.html">Actividades</a></li>
    <li><a href="/Lecturas/Lecturas.html">Lecturas</a></li>
    <li><a href="/Soporte/Soporte.html">Soporte</a></li>
    </ul>
    `
    document.body.insertAdjacentHTML('afterbegin', nav);
});

document.addEventListener('DOMContentLoaded', () => {
    var disclaimer =  document.querySelector("img[alt='www.000webhost.com']");
     if(disclaimer){
         disclaimer.remove();
     }  
   });
const menu = document.getElementById("menu")
const btn = document.getElementById("btn")
const navegation = document.getElementById("nav")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
let ancho = document.documentElement.clientWidth;



menu.addEventListener('click', function () {
    navegation.classList.toggle("active");
});

btn.addEventListener('click', function () {
    navegation.classList.remove("active");
});

btn1.addEventListener('click', function () {
    navegation.classList.remove("active");
});

btn2.addEventListener('click', function () {
    navegation.classList.remove("active");
});

btn3.addEventListener('click', function () {
    navegation.classList.remove("active");
});

var typed = new Typed('.type', {
    strings: ['<i class="titulo">BIENDENIDOS <br></i> <i class="segundotitulo">A mi portafolio.</i> '],
    stringsElement: '#typed-strings',
    typeSpeed:30, 
    backSpeed: 10,
    startDelay: 700,
    loop: true,
    loopCount: 5,
    showCursor: false
  });

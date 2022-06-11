const menu = document.getElementById("menu")
const navegation = document.getElementById("nav")
const btn = document.getElementById("btn")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
let ancho = document.documentElement.clientWidth;

menu.addEventListener('click', function(){
    navegation.classList.toggle("active");
});
if(ancho <= 500){
    btn.addEventListener('click', function(){
        navegation.classList.toggle("active");
    });
}

btn1.addEventListener('click', function(){
    navegation.classList.toggle("active");
});

btn2.addEventListener('click', function(){
    navegation.classList.toggle("active");
});

btn3.addEventListener('click', function(){
    navegation.classList.toggle("active");
});
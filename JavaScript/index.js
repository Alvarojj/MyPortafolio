const menu = document.getElementById("menu")
const btn = document.getElementById("btn")
const navegation = document.getElementById("nav")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")



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
    strings: ['<i class="titulo">BIENVENIDOS <br></i> <i class="segundotitulo">A mi portafolio.</i> '],
    stringsElement: '#typed-strings',
    typeSpeed:30, 
    backSpeed: 10,
    startDelay: 700,
    loop: true,
    loopCount: 1,
    showCursor: false
  });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const objetoProyect = document.getElementById('objetoproyect')
const btnProyect = document.getElementById('btnsProyect')


objetoProyect.addEventListener('mouseover', function(){
    btnProyect.classList.toggle("btnProyect");
});

objetoProyect.addEventListener('mouseout', function(){
    btnProyect.classList.toggle("btnProyect");
});

//*************************************************************************************** */
const objetoProyect2 = document.getElementById('objetoproyect2')
const btnProyect2 = document.getElementById('btnsProyect2')


objetoProyect2.addEventListener('mouseover', function(){
    btnProyect2.classList.toggle("btnProyect");
});

objetoProyect2.addEventListener('mouseout', function(){
    btnProyect2.classList.toggle("btnProyect");
});

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const objetoProyect3 = document.getElementById('objetoproyect3')
const btnProyect3 = document.getElementById('btnsProyect3')


objetoProyect3.addEventListener('mouseover', function(){
    btnProyect3.classList.toggle("btnProyect");
});

objetoProyect3.addEventListener('mouseout', function(){
    btnProyect3.classList.toggle("btnProyect");
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const objetoProyect4 = document.getElementById('objetoproyect4')
// const btnProyect4 = document.getElementById('btnsProyect4')


// objetoProyect4.addEventListener('mouseover', function(){
//     btnProyect4.classList.toggle("btnProyect");
// });

// objetoProyect4.addEventListener('mouseout', function(){
//     btnProyect4.classList.toggle("btnProyect");
// });
// //***************************************************************************************+ */

// const objetoProyect5 = document.getElementById('objetoproyect5')
// const btnProyect5 = document.getElementById('btnsProyect5')


// objetoProyect5.addEventListener('mouseover', function(){
//     btnProyect5.classList.toggle("btnProyect");
// });

// objetoProyect5.addEventListener('mouseout', function(){
//     btnProyect5.classList.toggle("btnProyect");
// });

// //**************************************************************************************** */

// const objetoProyect6 = document.getElementById('objetoproyect6')
// const btnProyect6 = document.getElementById('btnsProyect6')


// objetoProyect6.addEventListener('mouseover', function(){
//     btnProyect6.classList.toggle("btnProyect");
// });

// objetoProyect6.addEventListener('mouseout', function(){
//     btnProyect6.classList.toggle("btnProyect");
// });

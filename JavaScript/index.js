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



const formulario = document.querySelector("#formulario")
formulario.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const information = document.querySelector("#txt_opinion").value 

    fetch('http://localhost:8080',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            'txt_opinion': information
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

    alert('Se guardo tu opinión muchas gracias por tu mensaje')

})




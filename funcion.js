var musica = document.getElementById("musica");
var fondoNavideño = document.getElementById("fondoNavideño");
var fondoNavideño2 = document.getElementById("fondoNavideño2");

//MOSTRAR SALUDO CUANDO PASAN 5sg DEL INICIO DE LA PÁGINA
const myTimeout = setTimeout(mostrarSaludo, 3000);

function mostrarSaludo() {
  document.getElementById("felicidades").style.visibility="visible";
  document.getElementById("nombre").style.visibility="visible";
}

  

//OCULTAR SALUDO AL HACER CLICK EN EL BODY
let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);

function ocultarSaludo() {
    document.getElementById("felicidades").style.visibility="hidden";
    document.getElementById("nombre").style.visibility="hidden";
    document.getElementById("luisEnrique").style.transform = "scaleX(-1)";
    fondoNavideño.style.display="none";
    fondoNavideño2.style.display="block";
    musica.play();
  }


  window.addEventListener("orientationchange", ()=> {
    if (window.screen.orientation.type == "portrait-primary") {
      console.log("portrait");
    }
  
    if (window.screen.orientation.type == "landscape-primary") {
      console.log("landscape");
  
    }
  
  });



  /------------------------ NIEVE --------------------------/

  const crearNieve = () => {

    let nieve = document.createElement("i");

    let x = innerWidth * Math.random();

    let tamaño = Math.random() * 2;

    nieve.style.left = x + '%';

    nieve.style.width = tamaño + '%'
    nieve.style.height = tamaño + '%'

    copitos.appendChild(nieve);
  };
  
  //para que se ejecute la funcion cada cierto tiempo se usa setinterval
  setInterval(crearNieve, 20)









  
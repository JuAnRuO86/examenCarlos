var musica = document.getElementById("musica");
var fondoNavideño = document.getElementById("fondoNavideño");
var fondoNavideño2 = document.getElementById("fondoNavideño2");
var copa1 = document.getElementById("copa1");
var copa2 = document.getElementById("copa2");

//posiciones iniciales
var y_copa1 = 0;
var y_copa2 = 0;

function correr() {
    //movimiento copa1
    if (y_copa1 <= 100 && y_copa1 >= 0) { //condición para que se mueva entre estos valores de la pantalla
      y_copa1 = y_copa1 + 2; //movimiento del valor y
        copa1.style.top = y_copa1 + "%"; //aplicar el valor obtenido al top de la copa
    }
    else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
        y_copa1 = 0; //posicion inicial
        copa1.style.top = y_copa1 + "%"; //volvemos a aplicar el valor obtenido al top de la copa
    }

    //movimiento coche2
    if (y_copa2 <= 100 && y_copa2 >= 0) { //condición para que se mueva entre estos valores de la pantalla
        y_copa2 = y_copa2 + 1; //movimiento del valor y
        copa2.style.top = y_copa2 + "%"; //aplicar el valor obtenido al top de la copa
    }
    else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
        y_copa2 = 0; //posicion inicial
        copa2.style.top = y_copa2 + "%"; //volvemos a aplicar el valor obtenido al top de la copa
    }

  }

//MOSTRAR SALUDO CUANDO PASAN 3sg DEL INICIO DE LA PÁGINA
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
    document.getElementById("messi").style.transform = "scaleX(-1)";
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






  
          
  
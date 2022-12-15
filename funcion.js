var musica = document.getElementById("musica");
var fondoNavideño = document.getElementById("fondoNavideño");
var fondoNavideño2 = document.getElementById("fondoNavideño2");
var coche1 = document.getElementById("coche1");
var coche2 = document.getElementById("coche2");

//posiciones iniciales
var x_coche1 = 0;
var x_coche2 = 0;

function correr() {
    //movimiento coche1
    if (x_coche1 <= 100 && x_coche1 >= 0) { //condición para que se mueva entre estos valores de la pantalla
        x_coche1 = x_coche1 + 2; //movimiento del valor x
        coche1.style.top = x_coche1 + "%"; //aplicar el valor obtenido al left del elemento
    }
    else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
        x_coche1 = 0; //posicion inicial
        coche1.style.top = x_coche1 + "%"; //volvemos a aplicar el valor obtenido al left del elemento
    }

    //movimiento coche2
    if (x_coche2 <= 100 && x_coche2 >= 0) { //condición para que se mueva entre estos valores de la pantalla
        x_coche2 = x_coche2 + 1; //movimiento del valor x
        coche2.style.top = x_coche2 + "%"; //aplicar el valor obtenido al left del elemento
    }
    else { //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
        x_coche2 = 0; //posicion inicial
        coche2.style.top = x_coche2 + "%"; //volvemos a aplicar el valor obtenido al left del elemento
    }

  }

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






  
          
  
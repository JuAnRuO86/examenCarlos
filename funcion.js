var musica = document.getElementById("musica");
musica.play();


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

  }

  const deg=6;
  const hr = document.querySelector('#hr');
  const mn = document.querySelector('#mn');
  const sc = document.querySelector('#sc');

  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() = 30;
    let mm = day.getMinutes() = deg;
    let ss = day.getSeconds() = deg;

    hr.style.transform = `rotatez(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotatez(${(mm)}deg)`;
    sc.style.transform = `rotatez(${(ss)}deg)`;

  })







  window.addEventListener("orientationchange", ()=> {
    if (window.screen.orientation.type == "portrait-primary") {
      console.log("portrait");
    }
  
    if (window.screen.orientation.type == "landscape-primary") {
      console.log("landscape");
  
    }
  
  });















  
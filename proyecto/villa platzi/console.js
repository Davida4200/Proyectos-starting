/*
TODO: agregar movimientos en diagonal
*/
let lienzo = document.getElementById("lienzo");
let ctx = lienzo.getContext("2d");
let cantidad = aleatorio(1, 4);
let x, y;

const teclas = {
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  LEFT: 37,
};
const fondo = {
  url: "tile.png",
  cargaOK: false,
  limitX: -10,
  limitY: -10,
};
const vaca = {
  url: "vaca.png",
  cargaOK: false,
  position: [[], []],
};
const cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  size: 80,
  positionX: 200,
  positionY: 200,
  steps: 10,
};
const pollo = {
  url: "pollo.png",
  cargaOK: false,
  position: [[], []],
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", loadMap);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", loadCows);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", loadPigs);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", loadChickens);

function loadMap() {
  fondo.cargaOK = true;
  dibujar();
}
function loadCows() {
  vaca.cargaOK = true;
  dibujar();
}
function loadPigs() {
  cerdo.cargaOK = true;
  dibujar();
}
function loadChickens() {
  pollo.cargaOK = true;
  dibujar();
}
function aleatorio(min, max) {
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

function dibujar() {
  // el orden de los "if" importa a la hora de ejecutar el code
  if (fondo.cargaOK) {
    ctx.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    for (l = 0; cantidad > l; l++) {
      x = aleatorio(0, 7);
      y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      vaca.position[0].push([x]);
      vaca.position[1].push([y]);
      ctx.drawImage(vaca.imagen, vaca.position[0][l], vaca.position[1][l]);
      console.log(vaca.position[0][l]);
      console.log(vaca.position[1][l]);
    }
  }
  if (pollo.cargaOK) {
    for (l = 0; cantidad > l; l++) {
      x = aleatorio(0, 7);
      y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      pollo.position[0].push([x]);
      pollo.position[1].push([y]);
      ctx.drawImage(pollo.imagen, pollo.position[0][l], pollo.position[1][l]);
    }
  }
  if (cerdo.cargaOK) {
    for (l = 0; 1 > l; l++) {
      x = aleatorio(0, 7);
      y = aleatorio(0, 7);
      x = x * 60;
      y = y * 60;
      ctx.drawImage(cerdo.imagen, cerdo.positionX, cerdo.positionY);
    }
  }
}

document.addEventListener("keydown", movePig);
function movePig(ev) {
  if (teclas.UP === ev.keyCode) {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    cerdo.positionY -= cerdo.steps;
    dibujar();
  }
  if (teclas.RIGHT === ev.keyCode) {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    cerdo.positionX += cerdo.steps;
    dibujar();
  }
  if (teclas.DOWN === ev.keyCode) {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    cerdo.positionY += cerdo.steps;
    dibujar();
  }
  if (teclas.LEFT === ev.keyCode) {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    cerdo.positionX -= cerdo.steps;
    dibujar();
  }
  // El cerdito se escapó!
  if (
    cerdo.positionX === lienzo.width + cerdo.steps ||
    cerdo.positionY === lienzo.height + cerdo.steps ||
    cerdo.positionX === fondo.limitX - cerdo.size ||
    cerdo.positionY === fondo.limitY - cerdo.size
  ) {
    alert("El cerdito se escapó!");
  }
}

/* document.addEventListener("keydown", movePig);
function movePig(ev) {
  if (cerdo.stepsOn) {
    if (teclas.UP === ev.keyCode) {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
      cerdo.positionY -= cerdo.steps;
      dibujar();
      cerdo.stepsOn = true;
    }
  }
  if (teclas.RIGHT === ev.keyCode) {
    if (cerdo.stepsOn) {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
      cerdo.positionX += cerdo.steps;
      dibujar();
      cerdo.stepsOn = true;
    }
  }
  if (teclas.DOWN === ev.keyCode) {
    if (cerdo.stepsOn) {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
      cerdo.positionY += cerdo.steps;
      dibujar();
      cerdo.stepsOn = true;
    }
  }
  if (teclas.LEFT === ev.keyCode) {
    if (cerdo.stepsOn) {
      ctx.clearRect(0, 0, lienzo.width, lienzo.height);
      cerdo.positionX -= cerdo.steps;
      dibujar();
      cerdo.stepsOn = true;
    }
  }
} */

/* document.addEventListener("keyup", tileLimit);
function tileLimit() {
  if (cerdo.positionX === lienzo.width - 90) {
    cerdo.stepsOn = false;
    alert("El cerdito no se puede salir del mapa!");
    cerdo.positionX -= 200;
  }
} */

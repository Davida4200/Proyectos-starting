let cuadrito = document.getElementById("lienzo");
var ctx = cuadrito.getContext("2d");
var clean_button = document.getElementById("clean_button");
var x,
  y,
  dibujando = false,
  grosor = 1,
  color = "black";
cuadrito.addEventListener("mousemove", function (ev) {
  if (dibujando == true) {
    //offsetX, offsetY para las coordenadas respecto al canvas.
    dibujarLinea(color, x, y, ev.offsetX, ev.offsetY, ctx);
    x = ev.offsetX;
    y = ev.offsetY;
  }
});
cuadrito.addEventListener("mousedown", function (ev) {
  dibujando = true;
  x = ev.offsetX;
  y = ev.offsetY;
});
cuadrito.addEventListener("mouseup", function () {
  dibujando = false;
});
cuadrito.addEventListener("mouseleave", function () {
  dibujando = false;
});
clean_button.addEventListener("click", function () {
  ctx.clearRect(0, 0, cuadrito.width, cuadrito.height);
});
function defcolor(c) {
  color = c;
}
function defgrosor(g) {
  grosor = g;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  //Estos parámetros en la función son variables que existen unicamente dentro de la función, una vez se "cierra el ciclo de la funcion", las variables ya no existen.
  lienzo.beginPath(); // (funcion) abrir un camino para el trazo
  lienzo.strokeStyle = color; // (variable, atributo) asignar un color
  lienzo.lineWidth = grosor; // ancho de línea (px)
  lienzo.moveTo(xinicial, yinicial); // (funcion) fijar el primer punto de la linea
  lienzo.lineTo(xfinal, yfinal); // (funcion) fijar el punto final
  lienzo.stroke(); // (funcion) dibujar el trazo
  lienzo.closePath(); // (funcion) cerrar el camino para el trazo
}

/*
var teclas = { // de esta manera se crea un OBJETO para acceder a estos,
    UP: 38, // ya que se considera una mala práctica utilizar números "sueltos"
    RIGHT: 39, // de esa manera, se accede a estos atributos como: teclas.RIGHT
    DOWN: 40,// Por otro lado, se le consideran constantes a las variables que estan
    LEFT: 37// en mayúsculas, esto porque su valor interno nunca, o casi nunca cambia
}; //todo esto es una línea de código

document.addEventListener("keyup", dibujarTeclado);
function dibujarTeclado(ev)
{
    
    var tinta = "blue";
    var move = 10;
    switch(ev.keyCode) //switch solo funciona cuando se compara, no sirve con < ni con >.
    {
        case teclas.UP:
            dibujarLinea(tinta, x, y, x, y-move, ctx);
            y = y-move;
        break;
        case teclas.RIGHT:
            dibujarLinea(tinta, x, y, x+move, y, ctx);
            x = x+move;
        break;
        case teclas.DOWN:
            dibujarLinea(tinta, x, y, x, y+move, ctx);
            y = y+move;
        break;
        case teclas.LEFT:
            dibujarLinea(tinta, x, y, x-move, y, ctx);
            x = x-move;
        break;
    }
}*/

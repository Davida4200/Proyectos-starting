var d = document.getElementById("dibujito");
var texto = document.getElementById("txt_lineas");
var boton = document.getElementById("botoncito");
var clasico = document.getElementById("clasico");
var estrella = document.getElementById("estrella");
var marco = document.getElementById("marco");
var ojo = document.getElementById("ojo");
boton.addEventListener("click", dibujoPorClick);

var ctx = d.getContext("2d");
var ancho = d.width;
var tinta = "#00909E";//se puede llamar una variable de "afuera", hacia el interior de una función
var borde = "#00909E"
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) //Estos parámetros en la función son variables que existen unicamente dentro de la función, una vez se "cierra el ciclo de la funcion", las variables ya no existen.
{
    ctx.beginPath(); // (funcion) abrir un camino para el trazo
    ctx.strokeStyle = color; // (variable, atributo) asignar un color
    ctx.moveTo(xinicial, yinicial); // (funcion) fijar el primer punto de la linea
    ctx.lineTo(xfinal, yfinal); // (funcion) fijar el punto final
    ctx.stroke(); // (funcion) dibujar el trazo
    ctx.closePath(); // (funcion) cerrar el camino para el trazo
}

function dibujoPorClick()
{
    var lineas = texto.value;
    var l = 0;
    var f1, f2, f3;
    var espacio = ancho / lineas;
    for(l=0; l < lineas; l++)
    {
        f1 = espacio * l;
        f2 = espacio * (l + 1);
        f3 = ancho - (espacio * l);
        dibujarLinea(tinta, 0, f1, f2, ancho);
        dibujarLinea(tinta, f1, 0, ancho, f2);
        dibujarLinea(tinta, 0, f3, f2, 0);
        dibujarLinea(tinta, f1, ancho, ancho, f3);
        console.log("Linea " + l);
    }
}
var usuario = prompt("¿Cual es tu peso?");
var planeta = parseFloat(prompt("Elige un planeta. 1 es Marte. 2 es Jupiter."));
var peso = parseFloat(usuario).toFixed(2);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
var n_planeta;
if (planeta == 1) {
  peso_final = (peso * g_marte) / g_tierra;
  n_planeta = "Marte";
} else if (planeta == 2) {
  peso_final = (peso * g_jupiter) / g_tierra;
  n_planeta = "Jupiter";
} else {
  peso_final = 999999;
  n_planeta = "Krypton";
}
peso_final = parseFloat(peso_final).toFixed(2);
document.write(
  "Tu peso en " + n_planeta + " es <b>" + peso_final + " kilos </b>"
);

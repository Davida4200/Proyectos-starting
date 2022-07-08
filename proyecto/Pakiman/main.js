const imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

const coleccion = [];
addPakiman("Cauchin", "earth", 100, 30);
addPakiman("Pokacho", "earth", 80, 50);
addPakiman("Tocinauro", "earth", 80, 120);

for (let l of coleccion) {
  l.mostrar();
}

function addPakiman(nombre, tipo, vida, daño) {
  coleccion.push(new Pakiman(nombre, tipo, vida, daño));
}

class Billete {
  constructor(value, amount) {
    this.name = "Clarence Dollar";
    this.value = value;
    this.amount = amount;
  }
}

let b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
let dinero = 1000;
let papeles;
let division;
const caja = [];
const entregado = [];

function addCD(array, v, a) {
  array.push(new Billete(v, a));
}

addCD(caja, 50, 10);
addCD(caja, 20, 25);
addCD(caja, 10, 50);

function entregarDinero() {
  let t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (var bi of caja) {
    if (dinero > 0) {
      division = Math.floor(dinero / bi.value);
      if (division > bi.amount) {
        papeles = bi.amount;
      } else {
        papeles = division;
      }
      addCD(entregado, bi.value, papeles);
      dinero -= bi.value * papeles;
    }
    if (dinero > 0) {
      document.write(`Soy un cajero pobre y no tengo dinero :(`);
    } else {
      console.log(entregado);
    }
  }
  console.log(entregado);
}

/* for (let b of caja) {
  if (dinero > 0) {
    division = Math.floor(dinero / b.value);
  }
  if (division > b.cantidad) {
    papeles = b.cantidad;
  } else if (b.cantidad > division) {
    papeles = division;
  }
  addCD(entregado, b.valor, papeles);
  dinero = dinero - b.valor * papeles;
  console.log(entregado);
} */

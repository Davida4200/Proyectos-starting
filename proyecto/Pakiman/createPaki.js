class Pakiman {
  constructor(name, type, hp, dmg) {
    this.imagen = new Image();
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.dmg = dmg;
    this.imagen.src = imagenes[this.name];
  }
  hablar() {
    alert(this.name);
  }
  mostrar() {
    document.body.appendChild(this.imagen);
    document.write(`<p>`);
    document.write(
      `<b>${this.name}</b><br>Type: ${this.type}<br>HP: ${this.hp}<br>Damage: ${this.dmg}<hr>`
    );
    document.write(`</p>`);
  }
}

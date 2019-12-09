export class Cellulare {
  marca: string;
  modello: string;
  colore: string;
  prezzo: number;
  annoUscita: number;

  constructor(marca: string, modello: string, colore: string, prezzo: number, annoUscita: number) {
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
    this.prezzo = prezzo;
    this.annoUscita = annoUscita;
  }

  getTelefonoCompleto() {
    return this.marca + ' ' + this.modello;
  }
}
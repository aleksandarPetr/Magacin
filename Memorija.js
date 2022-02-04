import { Artikal } from "./Artikal.js";

export class Memorija extends Artikal {
    constructor(sifra, opis, dani, model, kapacitet, brzina) {
        super(sifra, opis, dani);
        this.model = model
        this.kapacitet = kapacitet
        this.brzina = brzina
    }

    vratiKapacitet() {
        return this.kapacitet
    }

}

const memorija = new Memorija('555', 'Jedinstvena memorija', 33, 'Sony', 8, 2400)
// console.log(memorija.sifra)


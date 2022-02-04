import { Artikal } from "./Artikal.js";

export class Televizor extends Artikal {
    constructor(sifra, opis, dani, model, dijagonala) {
        super(sifra, opis, dani);
        this.model = model
        this.dijagonala = dijagonala
    }

    opisTelevizora() {
        return `Proizvod sa sifrom ${this.sifra} je ${this.opis} sa dijagonalom od ${this.dijagonala} inca.`
    }

}

const televizor = new Televizor('123', 'Sony televizor', 33, 'Sony', '32')
// console.log(televizor.opisTelevizora())

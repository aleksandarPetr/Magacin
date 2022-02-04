export class Artikal {

    constructor(sifra, opis) {
        this.sifra = sifra
        this.opis = opis
        this.dani = 99
    }

    vratiBrojNedeljaProvedenihUMagacinu() {
        return Math.floor(this.dani / 7)
    }

    vratiOpis() {
        return this.opis
    }

    vratiBrojDanaUMagacinu() {
        return this.dani
    }

}

const artikal = new Artikal('101', 'prvi opis')

// console.log(artikal.vratiBrojNedeljaProvedenihUMagacinu())

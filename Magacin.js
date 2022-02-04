import { Artikal } from "./Artikal.js";
import { Televizor } from "./Televizor.js";
import { Memorija } from "./Memorija.js";

export class Magacin {

    constructor(ime) {
        this.ime = ime
        this.artikli = new Map()
    }

    dodajArtikal(nazivArtikla, artikal) {
        this.artikli.set(nazivArtikla, artikal)
    }

    ispisiOpiseArtikala() {
        let opis = `Opisi artikala:\n\n`
        for(const [key, value] of this.artikli) {
            opis += `${value.vratiOpis()}\n`
        }
        return opis
    }

    artikliKojiSuUMagacinuDuzeOd(brojNedelja) {
        const trazeniArtikli = []
        for(const [key, value] of this.artikli) {
            if(value.vratiBrojNedeljaProvedenihUMagacinu() > brojNedelja) {
                trazeniArtikli.push(key)
            }
        }
        return trazeniArtikli
    }

    vratiNajmladjiArtikal() {
        let sviArtikli = this.artikli.entries()
        const[[key, value]] = sviArtikli
        let minimum = value.vratiBrojDanaUMagacinu()
        let najmladjiArtikli = []
        for(const [key, value] of this.artikli.entries()) {
            if(value.vratiBrojDanaUMagacinu() === minimum) {
                najmladjiArtikli.push(key)
            } else if(value.vratiBrojDanaUMagacinu() < minimum) {
                minimum = value.vratiBrojDanaUMagacinu()
                najmladjiArtikli = []
                najmladjiArtikli.push(key)
            }
        }
        if(najmladjiArtikli.length === 1) {
            return `Najmladji artikal je ${najmladjiArtikal}`
        } else {
            return `Najmladji artikli su:\n${najmladjiArtikli.join('\n')}`
        }
    }

    // Ova metoda ubacuje listu Televizora u magacin, a treba da vrati broj ubacnih televizora cija je dijagonala manja od zadate vrednosti
    ubaciNizArtikala(niz, dijagonala) {
        let trazeniTelevizori = []
        for(let i = 0; i < niz.length; i++) {
            this.artikli.set(`Televizor ${niz[i].sifra}`, niz[i])
            if(niz[i].dijagonala < dijagonala) {
                trazeniTelevizori.push(niz[i])
            }
        }
        return trazeniTelevizori
    }

}

const magacin = new Magacin('Trosarina')
const artikal1 = new Artikal('111', 'Prolom voda')
const artikal2 = new Artikal('201', 'Coca Cola')
const artikal3 = new Artikal('101', 'Jaffa')
const televizor1 = new Televizor('123', 'Sony televizor', 33, 'Sony', '32')
const televizor2 = new Televizor('575', 'Philips televizor', 57, 'Philips', '37')
const televizor3 = new Televizor('359', 'Samsung televizor', 33, 'Samsung', '53')


magacin.dodajArtikal('Prolom voda', artikal1)
magacin.dodajArtikal('Coca Cola', artikal2)
magacin.dodajArtikal('Jaffa', artikal3)

// console.log(magacin.ispisiOpiseArtikala())

// console.log(magacin.artikliKojiSuUMagacinuDuzeOd(7))

// console.log(magacin.vratiNajmladjiArtikal())

const array = [televizor1, televizor2, televizor3]
magacin.ubaciNizArtikala(array, '40')
// console.log(magacin.artikli)
// console.log(magacin.ispisiOpiseArtikala())
// const nizBooleanVrednosti = [true, true, false, false, true, false, true]

console.log(magacin.ubaciTelevizorIliMemoriju())

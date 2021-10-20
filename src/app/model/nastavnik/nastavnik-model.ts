import { Mjesto } from '../mjesto/mjesto-model';

export class Nastavnik {
  id: number;
  jmbg: string;
  ime: string;
  prezime: string;
  adresa: string;
  titulaIspred: string;
  titulaIza: string;
  mjestoPrebivalista: Mjesto;
  constructor(
    id: number,
    jmbg: string,
    ime: string,
    prezime: string,
    adresa: string,
    titulaIspred: string,
    titulaIza: string,
    mjestoPrebivalista: Mjesto
  ) {
    this.id = id;
    this.jmbg = jmbg;
    this.ime = ime;
    this.prezime = prezime;
    this.adresa = adresa;
    this.titulaIspred = titulaIspred;
    this.titulaIza = titulaIza;
    this.mjestoPrebivalista = mjestoPrebivalista;
  }
}

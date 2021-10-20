import { Mjesto } from '../mjesto/mjesto-model';

export class Ustanova {
  id: number;
  oib: string;
  naziv: string;
  ziroRacun: string;
  adresa: string;
  datumOsnutka: Date;
  mjesto: Mjesto;
  constructor(
    id: number,
    oib: string,
    naziv: string,
    ziroRacun: string,
    adresa: string,
    datumOsnutka: Date,
    mjesto: Mjesto
  ) {
    this.id = id;
    this.oib = oib;
    this.naziv = naziv;
    this.ziroRacun = ziroRacun;
    this.adresa = adresa;
    this.datumOsnutka = datumOsnutka;
    this.mjesto = mjesto;
  }
}

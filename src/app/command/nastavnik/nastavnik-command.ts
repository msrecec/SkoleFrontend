export class NastavnikCommand {
  id: number;
  jmbg: string;
  ime: string;
  prezime: string;
  adresa: string;
  titulaIspred: string;
  titulaIza: string;
  lozinka: string;
  postBr: number;
  constructor(
    id: number,
    jmbg: string,
    ime: string,
    prezime: string,
    adresa: string,
    titulaIspred: string,
    titulaIza: string,
    lozinka: string,
    postBr: number
  ) {
    this.id = id;
    this.jmbg = jmbg;
    this.ime = ime;
    this.prezime = prezime;
    this.adresa = adresa;
    this.titulaIspred = titulaIspred;
    this.titulaIza = titulaIza;
    this.lozinka = lozinka;
    this.postBr = postBr;
  }
}

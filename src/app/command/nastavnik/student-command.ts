export class StudentCommand {
  id: number;
  jmbag: string;
  ime: string;
  prezime: string;
  datumUpisa: Date;
  postBrPrebivalista: number;
  postBrStanovanja: number;
  idSmjer: number;
  constructor(
    id: number,
    jmbag: string,
    ime: string,
    prezime: string,
    datumUpisa: Date,
    postBrPrebivalista: number,
    postBrStanovanja: number,
    idSmjer: number
  ) {
    this.id = id;
    this.jmbag = jmbag;
    this.ime = ime;
    this.prezime = prezime;
    this.datumUpisa = datumUpisa;
    this.postBrPrebivalista = postBrPrebivalista;
    this.postBrStanovanja = postBrStanovanja;
    this.idSmjer = idSmjer;
  }
}

import { Mjesto } from '../mjesto/mjesto-model';
import { Smjer } from '../smjer/smjer-model';

export class Student {
  id: number;
  jmbag: string;
  ime: string;
  prezime: string;
  datumUpisa: Date;
  mjestoPrebivalista: Mjesto;
  mjestoStanovanja: Mjesto;
  smjer: Smjer;
  constructor(
    id: number,
    jmbag: string,
    ime: string,
    prezime: string,
    datumUpisa: Date,
    mjestoPrebivalista: Mjesto,
    mjestoStanovanja: Mjesto,
    smjer: Smjer
  ) {
    this.id = id;
    this.jmbag = jmbag;
    this.ime = ime;
    this.prezime = prezime;
    this.datumUpisa = datumUpisa;
    this.mjestoPrebivalista = mjestoPrebivalista;
    this.mjestoStanovanja = mjestoStanovanja;
    this.smjer = smjer;
  }
}

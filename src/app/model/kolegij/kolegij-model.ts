import { Smjer } from '../smjer/smjer-model';

export class Kolegij {
  id: number;
  naziv: string;
  opis: string;
  smjer: Smjer;
  constructor(id: number, naziv: string, opis: string, smjer: Smjer) {
    this.id = id;
    this.naziv = naziv;
    this.opis = opis;
    this.smjer = smjer;
  }
}

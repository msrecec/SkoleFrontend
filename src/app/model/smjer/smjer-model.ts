import { Ustanova } from '../ustanova/ustanova-model';

export class Smjer {
  id: number;
  naziv: string;
  ustanova: Ustanova;
  constructor(id: number, naziv: string, ustanova: Ustanova) {
    this.id = id;
    this.naziv = naziv;
    this.ustanova = ustanova;
  }
}

import { Zupanija } from '../zupanija/zupanija-model';

export class Mjesto {
  id: number;
  postBr: number;
  nazivMjesta: string;
  zupanija: Zupanija;
  constructor(
    id: number,
    postbr: number,
    nazivMjesta: string,
    zupanija: Zupanija
  ) {
    this.id = id;
    this.postBr = postbr;
    this.nazivMjesta = nazivMjesta;
    this.zupanija = zupanija;
  }
}

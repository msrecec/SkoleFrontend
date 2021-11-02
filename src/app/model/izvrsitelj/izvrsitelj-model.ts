import { Kolegij } from '../kolegij/kolegij-model';
import { Nastavnik } from '../nastavnik/nastavnik-model';
import { UlogaIzvrsitelja } from '../uloga-izvrsitelja/uloga-izvrsitelja-model';

export class Izvrsitelj {
  id: number;
  nastavnik: Nastavnik;
  kolegij: Kolegij;
  ulogaIzvrsitelja: UlogaIzvrsitelja;
  constructor(
    id: number,
    nastavnik: Nastavnik,
    kolegij: Kolegij,
    ulogaIzvrsitelja: UlogaIzvrsitelja
  ) {
    this.id = id;
    this.nastavnik = nastavnik;
    this.kolegij = kolegij;
    this.ulogaIzvrsitelja = ulogaIzvrsitelja;
  }
}

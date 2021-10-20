import { Nastavnik } from './nastavnik-model';

export class NastavnikPaginated {
  nastavnici: Nastavnik[];
  totalPages: number;
  totalElements: number;
  constructor(
    nastavnici: Nastavnik[],
    totalPages: number,
    totalElements: number
  ) {
    this.nastavnici = nastavnici;
    this.totalPages = totalPages;
    this.totalElements = totalElements;
  }
}

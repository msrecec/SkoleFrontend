import { Ustanova } from './ustanova-model';

export class UstanovaPaginated {
  ustanove: Ustanova[];
  totalPages: number;
  totalElements: number;
  constructor(ustanove: Ustanova[], totalPages: number, totalElements: number) {
    this.ustanove = ustanove;
    this.totalPages = totalPages;
    this.totalElements = totalElements;
  }
}

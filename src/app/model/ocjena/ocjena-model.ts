import { Time } from '@angular/common';
import { Kolegij } from '../kolegij/kolegij-model';
import { Student } from '../student/student-model';

export class Ocjena {
  datumPolaganja: Date;
  vrijemePolaganja: number;
  ocjena: number;
  student: Student;
  kolegij: Kolegij;
  constructor(
    datumPolaganja: Date,
    vrijemePolaganja: number,
    ocjena: number,
    student: Student,
    kolegij: Kolegij
  ) {
    this.datumPolaganja = datumPolaganja;
    this.vrijemePolaganja = vrijemePolaganja;
    this.ocjena = ocjena;
    this.student = student;
    this.kolegij = kolegij;
  }
}

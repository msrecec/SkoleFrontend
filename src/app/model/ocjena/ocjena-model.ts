import { Time } from '@angular/common';
import { Kolegij } from '../kolegij/kolegij-model';
import { Student } from '../student/student-model';

export class Ocjena {
  id: number;
  datumPolaganja: Date;
  vrijemePolaganja: number;
  ocjena: number;
  student: Student;
  kolegij: Kolegij;
  constructor(
    id: number,
    datumPolaganja: Date,
    vrijemePolaganja: number,
    ocjena: number,
    student: Student,
    kolegij: Kolegij
  ) {
    this.id = id;
    this.datumPolaganja = datumPolaganja;
    this.vrijemePolaganja = vrijemePolaganja;
    this.ocjena = ocjena;
    this.student = student;
    this.kolegij = kolegij;
  }
}

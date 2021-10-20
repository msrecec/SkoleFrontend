import { Student } from './student-model';

export class StudentPaginated {
  students: Student[];
  totalPages: number;
  totalElements: number;
  constructor(students: Student[], totalPages: number, totalElements: number) {
    this.students = students;
    this.totalPages = totalPages;
    this.totalElements = totalElements;
  }
}

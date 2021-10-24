import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student/student-model';
import { StudentPaginated } from 'src/app/model/student/student-paginated-model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-new-kolegij-student',
  templateUrl: './new-kolegij-student.component.html',
  styleUrls: ['./new-kolegij-student.component.css'],
})
export class NewKolegijStudentComponent implements OnInit {
  studentiPaginated!: StudentPaginated;
  idSmjer!: number;
  idKolegij!: number;
  totalElements!: number;
  totalPages!: number;
  pageSize: number = 10;
  page: number = 1;
  odabraniStudenti: Student[] = [];

  constructor(
    private studentiService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((returnValue) => {
      this.idSmjer = returnValue.idSmjer;
      this.idKolegij = returnValue.idKolegij;
      this.studentiService
        .getStudentsByIdSmjerAndNotIdKolegijPaginated(
          this.idKolegij,
          this.idSmjer,
          0,
          this.pageSize
        )
        .subscribe((returnValue) => {
          this.studentiPaginated = returnValue;
          this.totalElements = returnValue.totalElements;
          this.totalPages = returnValue.totalPages;
        });
    });
  }

  getNewPages(page: number) {
    this.page = page;
    this.studentiService
      .getStudentsByIdSmjerAndNotIdKolegijPaginated(
        this.idKolegij,
        this.idSmjer,
        this.page - 1,
        this.pageSize
      )
      .subscribe((returnValue) => {
        this.studentiPaginated = returnValue;
        this.totalElements = this.studentiPaginated.totalElements;
        this.totalPages = this.studentiPaginated.totalPages;
      });
  }

  addToVar(student: Student, id: number) {
    let flag = false;
    let index = 0;
    this.odabraniStudenti.forEach((odabraniStudent) => {
      if (odabraniStudent.id === student.id) {
        flag = true;
        index = this.odabraniStudenti.indexOf(odabraniStudent);
      }
    });
    if (flag) {
      this.odabraniStudenti.splice(index, 1);
      return;
    }
    this.odabraniStudenti.push(student);
  }

  removeFromVar(id: number) {
    let flag = false;
    let index = 0;
    this.odabraniStudenti.forEach((odabraniStudent) => {
      if (odabraniStudent.id === id) {
        flag = true;
        index = this.odabraniStudenti.indexOf(odabraniStudent);
      }
    });
    if (flag) {
      this.odabraniStudenti.splice(index, 1);
      return;
    }
  }

  submitStudenti() {}
}

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
      this.studentiService
        .getStudentsByIdSmjerPaginated(this.idSmjer, 0, this.pageSize)
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
      .getStudentsByIdSmjerPaginated(this.idSmjer, this.page - 1, this.pageSize)
      .subscribe((returnValue) => {
        this.studentiPaginated = returnValue;
        this.totalElements = this.studentiPaginated.totalElements;
        this.totalPages = this.studentiPaginated.totalPages;
      });
  }

  addToVar(student: Student, id: number) {
    //   let flag = false;
    //   let index = 0;
    //   this.odabraniStudenti.forEach((odabraniStudent) => {
    //     if (odabraniStudent.id === student.id) {
    //       flag = true;
    //       index = this.odabraniStudenti.indexOf(odabraniStudent);
    //     }
    //   });
    //   if (flag) {
    //     this.odabraniStudenti.splice(index, 1);
    //     const element = document.getElementById(id.toString());
    //     element!.style.backgroundColor = 'white';
    //   }
    //   this.odabraniStudenti.push(student);
  }
}

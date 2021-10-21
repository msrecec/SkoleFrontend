import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentPaginated } from 'src/app/model/student/student-paginated-model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css'],
})
export class StudentiComponent implements OnInit {
  studentiPaginated?: StudentPaginated;
  page: number = 1;
  totalElements: number = 10;
  pageSize: number = 10;
  input: string = '';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.studentService
      .getStudentsPaginated()
      .subscribe((studentsPaginated) => {
        this.studentiPaginated = studentsPaginated;
        this.totalElements = studentsPaginated.totalElements;
      });
  }

  getNewPages(page: number) {
    this.page = page;
    this.studentService
      .getStudentsPaginated(this.page - 1, this.pageSize)
      .subscribe((studentsPaginated) => {
        this.studentiPaginated = studentsPaginated;
        this.totalElements = this.studentiPaginated.totalElements;
      });
  }

  navigateToStudent(id: number) {
    this.router.navigate(['studenti', id]);
  }

  navigateToSave() {
    this.router.navigate(['studenti', 'save']);
  }

  fts() {
    if (!this.input) {
      this.page = 1;

      this.studentService
        .getStudentsPaginated(0, this.pageSize)
        .subscribe((returnValue) => {
          this.studentiPaginated = returnValue;
          this.totalElements = returnValue.totalElements;
        });

      return;
    }

    this.studentService
      .getStudentsFTS(this.input, this.page - 1, this.pageSize)
      .subscribe((returnValue) => {
        if (!returnValue) {
          this.studentiPaginated = undefined;
          this.totalElements = 0;
          return;
        }

        this.studentiPaginated = returnValue;
        this.totalElements = returnValue.totalElements;
      });
  }
}

import { Component, OnInit } from '@angular/core';
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

  constructor(private studentService: StudentService) {}

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
}

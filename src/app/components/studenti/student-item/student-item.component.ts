import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Student } from 'src/app/model/student/student-model';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css'],
})
export class StudentItemComponent implements OnInit {
  student?: Student;

  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.student = data['student'];
    });
  }

  goBack() {
    this._location.back();
  }

  goEdit() {
    this.router.navigate(['studenti', 'edit', this.student?.id]);
  }
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit {
  studentForm!: FormGroup;
  isEdit: boolean = false;
  id: number = 1;
  jmbag!: string;
  ime!: string;
  prezime!: string;
  datumUpisa!: Date;
  postBrPrebivalista!: number;
  postBrStanovanja!: number;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {}

  goBack() {}

  onSubmit() {}
}

import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { OcjenaCommand } from 'src/app/command/ocjena/ocjena-command';
import { Ocjena } from 'src/app/model/ocjena/ocjena-model';
import { Student } from 'src/app/model/student/student-model';
import { OcjeneService } from 'src/app/services/ocjene.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-ocjena-edit',
  templateUrl: './ocjena-edit.component.html',
  styleUrls: ['./ocjena-edit.component.css'],
})
export class OcjenaEditComponent implements OnInit {
  student!: Student;
  ocjena!: Ocjena;
  ocjenaForm!: FormGroup;

  constructor(
    private studentService: StudentService,
    private ocjeneService: OcjeneService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.ocjenaForm = new FormGroup({
      datumPolaganja: new FormControl(null, [Validators.required]),
      vrijemePolaganja: new FormControl(null, [Validators.required]),
      ocjena: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
    });

    this.route.params.subscribe((params) => {
      this.studentService
        .getStudentById(params.idStudent)
        .subscribe((student) => {
          this.student = student;
        });
      this.ocjeneService
        .getOcjenaByIdStudentAndIdKolegij(params.idStudent, params.idKolegij)
        .subscribe((ocjena) => {
          this.ocjena = ocjena;
        });
    });
  }

  onSubmit() {
    if (this.ocjenaForm.valid) {
      this.ocjeneService
        .putOcjena(
          new OcjenaCommand(
            this.ocjena.id,
            this.ocjena.datumPolaganja,
            this.ocjena.vrijemePolaganja,
            this.ocjena.ocjena,
            this.ocjena.student.id,
            this.ocjena.kolegij.id
          )
        )
        .subscribe((returnValue) => {
          this._location.back();
        });
    }
  }
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.isEdit = true;
    }

    this.studentForm = new FormGroup({
      jmbag: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      ime: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      prezime: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      datumUpisa: new FormControl(null, [Validators.required]),
      postBrPrebivalista: new FormControl(null, [
        Validators.required,
        Validators.min(10000),
        Validators.max(99999),
      ]),
      postBrStanovanja: new FormControl(null, [
        Validators.required,
        Validators.min(10000),
        Validators.max(99999),
      ]),
    });

    if (this.isEdit && this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');

      if (!id) {
        this.router.navigate(['studenti']);
        return;
      }
      this.studentService.getStudentById(+id).subscribe((returnValue) => {
        this.id = returnValue.id;
        this.jmbag = returnValue.jmbag;
        this.ime = returnValue.ime;
        this.prezime = returnValue.prezime;
        this.datumUpisa = returnValue.datumUpisa;
        this.postBrPrebivalista = returnValue.mjestoPrebivalista.postBr;
        this.postBrStanovanja = returnValue.mjestoStanovanja.postBr;
      });
    }
  }

  goBack() {
    this._location.back();
  }

  onSubmit() {
    if (this.studentForm.valid) {
    }
  }
}

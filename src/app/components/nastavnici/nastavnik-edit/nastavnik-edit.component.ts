import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nastavnik-edit',
  templateUrl: './nastavnik-edit.component.html',
  styleUrls: ['./nastavnik-edit.component.css'],
})
export class NastavnikEditComponent implements OnInit {
  isEdit: boolean = false;
  nastavnikForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.nastavnikForm = new FormGroup({
      jmbg: new FormControl(null, [Validators.required]),
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
      adresa: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
      titulaIspred: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ]),
      titulaIza: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ]),
      lozinka: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(32),
      ]),
      postbr: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {}
}

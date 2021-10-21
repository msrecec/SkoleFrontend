import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { NastavnikCommand } from 'src/app/command/nastavnik/nastavnik-command';
import { NastavnikService } from 'src/app/services/nastavnik.service';

@Component({
  selector: 'app-nastavnik-edit',
  templateUrl: './nastavnik-edit.component.html',
  styleUrls: ['./nastavnik-edit.component.css'],
})
export class NastavnikEditComponent implements OnInit {
  isEdit: boolean = false;
  nastavnikForm!: FormGroup;
  jmbg!: string;
  ime!: string;
  prezime!: string;
  adresa!: string;
  titulaIspred!: string;
  titulaIza!: string;
  lozinka!: string;
  postbr!: number;

  constructor(
    private nastavnikService: NastavnikService,
    private router: Router
  ) {}

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
      postbr: new FormControl(null, [
        Validators.required,
        Validators.min(10000),
        Validators.max(99999),
      ]),
    });
  }

  onSubmit() {
    if (this.nastavnikForm.valid) {
      const nastavnikCommand = new NastavnikCommand(
        1,
        this.jmbg,
        this.ime,
        this.prezime,
        this.adresa,
        this.titulaIspred,
        this.titulaIza,
        this.lozinka,
        this.postbr
      );

      if (!this.isEdit) {
        this.nastavnikService
          .postNastavnik(nastavnikCommand)
          .subscribe((returnValue) => {
            this.router.navigate(['nastavnici']);
          });
      }
    }
  }
}

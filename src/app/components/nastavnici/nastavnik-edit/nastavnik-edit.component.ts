import { Location } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { tap } from 'rxjs/operators';
import { NastavnikCommand } from 'src/app/command/nastavnik/nastavnik-command';
import { NastavnikService } from 'src/app/services/nastavnik.service';

@Component({
  selector: 'app-nastavnik-edit',
  templateUrl: './nastavnik-edit.component.html',
  styleUrls: ['./nastavnik-edit.component.css'],
})
@Injectable()
export class NastavnikEditComponent implements OnInit {
  isEdit: boolean = false;
  id: number = 1;
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
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.isEdit = true;
    }

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

    if (this.isEdit && this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');

      if (!id) {
        this.router.navigate(['nastavnici']);
        return;
      }
      this.nastavnikService.getNastavnikById(+id).subscribe((returnValue) => {
        this.id = returnValue.id;
        this.ime = returnValue.ime;
        this.prezime = returnValue.prezime;
        this.jmbg = returnValue.jmbg;
        this.adresa = returnValue.adresa;
        this.titulaIspred = returnValue.titulaIspred;
        this.titulaIza = returnValue.titulaIza;
        this.postbr = returnValue.mjestoPrebivalista.postBr;
      });
    }
  }

  goBack() {
    this._location.back();
  }

  onSubmit() {
    if (this.nastavnikForm.valid) {
      const nastavnikCommand = new NastavnikCommand(
        this.id,
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
      } else {
        this.nastavnikService
          .putNastavnik(nastavnikCommand)
          .subscribe((returnValue) => {
            this.router.navigate(['nastavnici']);
          });
      }
    }
  }
}

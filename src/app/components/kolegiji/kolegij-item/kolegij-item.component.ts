import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';
import { Kolegij } from 'src/app/model/kolegij/kolegij-model';
import { Nastavnik } from 'src/app/model/nastavnik/nastavnik-model';
import { Ocjena } from 'src/app/model/ocjena/ocjena-model';
import { Student } from 'src/app/model/student/student-model';
import { NastavnikService } from 'src/app/services/nastavnik.service';
import { OcjeneService } from 'src/app/services/ocjene.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-kolegij-item',
  templateUrl: './kolegij-item.component.html',
  styleUrls: ['./kolegij-item.component.css'],
})
@Injectable()
export class KolegijItemComponent implements OnInit {
  studenti!: Student[];
  nastavnici!: Nastavnik[];
  idKolegij!: number;

  constructor(
    private studentiService: StudentService,
    private nastavniciService: NastavnikService,
    private ocjeneService: OcjeneService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parameter) => {
      this.idKolegij = parameter.idKolegij;
      this.studentiService
        .getStudentByIdKolegij(+this.idKolegij)
        .subscribe((returnValue) => {
          this.studenti = returnValue;
          console.log(this.studenti);
        });
      this.nastavniciService
        .getStudentByIdKolegij(+this.idKolegij)
        .subscribe((returnValue) => {
          this.nastavnici = returnValue;
          console.log(this.nastavnici);
        });
    });
  }
}

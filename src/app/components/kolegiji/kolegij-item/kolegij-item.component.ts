import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';
import { Kolegij } from 'src/app/model/kolegij/kolegij-model';
import { Nastavnik } from 'src/app/model/nastavnik/nastavnik-model';
import { Student } from 'src/app/model/student/student-model';
import { NastavnikService } from 'src/app/services/nastavnik.service';
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

  constructor(
    private studentiService: StudentService,
    private nastavniciService: NastavnikService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let param;

    this.route.params.subscribe((parameter) => {
      param = parameter.idKolegij;
      this.studentiService
        .getStudentByIdKolegij(+param)
        .subscribe((returnValue) => {
          this.studenti = returnValue;
          console.log(this.studenti);
        });
      this.nastavniciService
        .getStudentByIdKolegij(+param)
        .subscribe((returnValue) => {
          this.nastavnici = returnValue;
          console.log(this.nastavnici);
        });
    });
  }
}

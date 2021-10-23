import { Component, Injectable, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Route,
  Router,
} from '@angular/router';
import { Kolegij } from 'src/app/model/kolegij/kolegij-model';
import { Nastavnik } from 'src/app/model/nastavnik/nastavnik-model';
import { Ocjena } from 'src/app/model/ocjena/ocjena-model';
import { Student } from 'src/app/model/student/student-model';
import { UlogaIzvrsitelja } from 'src/app/model/uloga-izvrsitelja/uloga-izvrsitelja-model';
import { NastavnikService } from 'src/app/services/nastavnik.service';
import { OcjeneService } from 'src/app/services/ocjene.service';
import { StudentService } from 'src/app/services/student.service';
import { UlogaIzvrsiteljaService } from 'src/app/services/uloga-izvrsitelja.service';

@Component({
  selector: 'app-kolegij-item',
  templateUrl: './kolegij-item.component.html',
  styleUrls: ['./kolegij-item.component.css'],
})
@Injectable()
export class KolegijItemComponent implements OnInit {
  studenti: { student: Student; ocjena: Ocjena }[] = [];
  nastavnici: { nastavnik: Nastavnik; ulogaIzvrsitelja: UlogaIzvrsitelja }[] =
    [];
  idKolegij!: number;

  constructor(
    private studentiService: StudentService,
    private nastavniciService: NastavnikService,
    private ocjeneService: OcjeneService,
    private ulogaIzvrsiteljaService: UlogaIzvrsiteljaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  goToStudent(id: number) {
    this.router.navigate(['studenti', id], { relativeTo: this.route });
  }

  navigateToNewStudent() {
    this.router.navigate(['new-student'], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.route.params.subscribe((parameter) => {
      this.idKolegij = parameter.idKolegij;
      this.studentiService
        .getStudentByIdKolegij(+this.idKolegij)
        .subscribe((returnValue) => {
          if (returnValue) {
            returnValue.forEach((student) => {
              this.ocjeneService
                .getOcjenaByIdStudentAndIdKolegij(student.id, this.idKolegij)
                .subscribe((ocjena) => {
                  this.studenti.push({ student: student, ocjena: ocjena });
                });
            });
          }
        });
      this.nastavniciService
        .getNastavnikByIdKolegij(+this.idKolegij)
        .subscribe((returnValue) => {
          if (returnValue) {
            returnValue.forEach((nastavnik) => {
              this.ulogaIzvrsiteljaService
                .getUlozaIzvrsiteljaByIdKolegijAndIdNastvanik(
                  nastavnik.id,
                  +this.idKolegij
                )
                .subscribe((ulogaIzvrsitelja) => {
                  this.nastavnici.push({
                    nastavnik: nastavnik,
                    ulogaIzvrsitelja: ulogaIzvrsitelja,
                  });
                });
            });
          }
        });
    });
  }
}

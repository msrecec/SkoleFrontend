import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Izvrsitelj } from 'src/app/model/izvrsitelj/izvrsitelj-model';
import { Nastavnik } from 'src/app/model/nastavnik/nastavnik-model';
import { IzvrsiteljiService } from 'src/app/services/izvrsitelji.service';

@Component({
  selector: 'app-kolegij-nastavnik',
  templateUrl: './kolegij-nastavnik.component.html',
  styleUrls: ['./kolegij-nastavnik.component.css'],
})
export class KolegijNastavnikComponent implements OnInit {
  nastavnik!: Nastavnik;
  izvrsitelj!: Izvrsitelj;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private izvrsiteljiService: IzvrsiteljiService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.nastavnik = data['nastavnik'];
      let idKolegij;
      this.route.params.subscribe((value) => {
        idKolegij = value.idKolegij;
      });

      if (idKolegij == undefined) {
        idKolegij = -1;
      }
      this.izvrsiteljiService
        .getIzvrsiteljByIdNastavnikAndIdKolegij(this.nastavnik.id, +idKolegij)
        .subscribe((returnValue) => {
          this.izvrsitelj = returnValue;
        });
    });
  }

  goBack() {}

  delete() {}

  goEdit() {}
}

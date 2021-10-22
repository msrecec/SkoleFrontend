import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Nastavnik } from 'src/app/model/nastavnik/nastavnik-model';
import { Smjer } from 'src/app/model/smjer/smjer-model';

@Component({
  selector: 'app-smjerovi',
  templateUrl: './smjerovi.component.html',
  styleUrls: ['./smjerovi.component.css'],
})
export class SmjeroviComponent implements OnInit {
  smjerovi!: Smjer[];

  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.smjerovi = data['smjerovi'];
    });
  }

  goBack() {
    this._location.back();
  }
}

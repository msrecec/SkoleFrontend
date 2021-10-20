import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Nastavnik } from 'src/app/model/nastavnik/nastavnik-model';

@Component({
  selector: 'app-nastavnik-item',
  templateUrl: './nastavnik-item.component.html',
  styleUrls: ['./nastavnik-item.component.css'],
})
export class NastavnikItemComponent implements OnInit {
  nastavnik?: Nastavnik;

  constructor(private route: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.nastavnik = data['nastavnik'];
    });
  }

  goBack() {
    this._location.back();
  }
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Kolegij } from 'src/app/model/kolegij/kolegij-model';

@Component({
  selector: 'app-kolegiji',
  templateUrl: './kolegiji.component.html',
  styleUrls: ['./kolegiji.component.css'],
})
export class KolegijiComponent implements OnInit {
  kolegiji!: Kolegij[];

  constructor(
    private route: ActivatedRoute,
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.kolegiji = data['kolegiji'];
    });
  }

  goBack() {
    this._location.back();
  }
  navigateToKolegijItem(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}

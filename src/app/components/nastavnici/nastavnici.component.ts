import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NastavnikPaginated } from 'src/app/model/nastavnik/nastavnik-paginated-model';
import { NastavnikService } from 'src/app/services/nastavnik.service';

@Component({
  selector: 'app-nastavnici',
  templateUrl: './nastavnici.component.html',
  styleUrls: ['./nastavnici.component.css'],
})
export class NastavniciComponent implements OnInit {
  nastavniciPaginated?: NastavnikPaginated;
  page: number = 1;
  totalElements: number = 10;
  pageSize: number = 10;
  input: string = '';

  constructor(
    private nastavnikService: NastavnikService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nastavnikService
      .getNastavniciPaginated()
      .subscribe((nastavniksPaginated) => {
        this.nastavniciPaginated = nastavniksPaginated;
        this.totalElements = nastavniksPaginated.totalElements;
      });
  }

  getNewPages(page: number) {
    this.page = page;
    this.nastavnikService
      .getNastavniciPaginated(this.page - 1, this.pageSize)
      .subscribe((nastavniksPaginated) => {
        this.nastavniciPaginated = nastavniksPaginated;
        this.totalElements = this.nastavniciPaginated.totalElements;
      });
  }

  navigateToNastavnik(id: number) {
    this.router.navigate(['nastavnici', id]);
  }

  fts() {
    if (!this.input) {
      this.page = 1;

      this.nastavnikService
        .getNastavniciPaginated(0, this.pageSize)
        .subscribe((returnValue) => {
          this.nastavniciPaginated = returnValue;
          this.totalElements = returnValue.totalElements;
        });

      return;
    }

    this.nastavnikService
      .getNastavnikFTS(this.input, this.page - 1, this.pageSize)
      .subscribe((returnValue) => {
        if (!returnValue) {
          this.nastavniciPaginated = undefined;
          this.totalElements = 0;
          return;
        }

        this.nastavniciPaginated = returnValue;
        this.totalElements = returnValue.totalElements;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Ustanova } from 'src/app/model/ustanova/ustanova-model';
import { UstanovaPaginated } from 'src/app/model/ustanova/ustanova-paginated-model';
import { UstanoveService } from 'src/app/services/ustanove.service';

@Component({
  selector: 'app-ustanove',
  templateUrl: './ustanove.component.html',
  styleUrls: ['./ustanove.component.css'],
})
export class UstanoveComponent implements OnInit {
  ustanove!: UstanovaPaginated;
  page: number = 0;
  pageSize: number = 10;
  totalElements!: number;

  constructor(private ustanoveService: UstanoveService) {}

  ngOnInit(): void {
    this.ustanoveService.findAllPaginated().subscribe((returnValue) => {
      this.ustanove = returnValue;
      this.totalElements = returnValue.totalElements;
    });
  }

  getNewPages(page: number) {
    this.page = page;
    this.ustanoveService
      .findAllPaginated(this.page - 1, this.pageSize)
      .subscribe((returnValue) => {
        this.ustanove = returnValue;
        this.totalElements = returnValue.totalElements;
      });
  }
}

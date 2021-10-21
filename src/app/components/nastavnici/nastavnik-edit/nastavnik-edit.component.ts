import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nastavnik-edit',
  templateUrl: './nastavnik-edit.component.html',
  styleUrls: ['./nastavnik-edit.component.css'],
})
export class NastavnikEditComponent implements OnInit {
  isEdit: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

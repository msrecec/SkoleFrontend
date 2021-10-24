import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Ocjena } from 'src/app/model/ocjena/ocjena-model';
import { Student } from 'src/app/model/student/student-model';
import { OcjeneService } from 'src/app/services/ocjene.service';

@Component({
  selector: 'app-kolegij-student',
  templateUrl: './kolegij-student.component.html',
  styleUrls: ['./kolegij-student.component.css'],
})
export class KolegijStudentComponent implements OnInit {
  student!: Student;
  ocjena!: Ocjena;
  ocjeneForm!: FormGroup;
  isEdit: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ocjeneService: OcjeneService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.student = data['student'];
      let idKolegij;
      this.route.params.subscribe((value) => {
        idKolegij = value.idKolegij;
      });

      if (idKolegij == undefined) {
        idKolegij = -1;
      }

      this.ocjeneService
        .getOcjenaByIdStudentAndIdKolegij(this.student.id, +idKolegij)
        .subscribe((returnValue) => {
          this.ocjena = returnValue;
        });
    });
  }
  onSubmit() {}

  goBack() {
    this._location.back();
  }

  delete() {
    this.ocjeneService.deleteOcjena(this.ocjena.id).subscribe((returnValue) => {
      this.goBack();
    });
  }

  goEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}

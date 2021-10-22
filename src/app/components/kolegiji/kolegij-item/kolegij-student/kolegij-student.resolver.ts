import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Student } from 'src/app/model/student/student-model';
import { StudentService } from 'src/app/services/student.service';

@Injectable({
  providedIn: 'root',
})
export class KolegijStudentResolver implements Resolve<Student> {
  constructor(private studentiService: StudentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Student> {
    return this.studentiService.getStudentById(route.params['idStudent']);
  }
}

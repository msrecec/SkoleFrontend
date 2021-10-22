import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Kolegij } from 'src/app/model/kolegij/kolegij-model';
import { KolegijiService } from 'src/app/services/kolegiji.service';

@Injectable({
  providedIn: 'root',
})
export class KolegijiResolver implements Resolve<Kolegij[]> {
  constructor(private kolegijiService: KolegijiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Kolegij[]> {
    return this.kolegijiService.getKolegijiBySmjerId(route.params['idSmjer']);
  }
}

import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Nastavnik } from 'src/app/model/nastavnik/nastavnik-model';
import { NastavnikPaginated } from 'src/app/model/nastavnik/nastavnik-paginated-model';
import { NastavnikService } from 'src/app/services/nastavnik.service';

@Injectable({
  providedIn: 'root',
})
export class NastavnikResolver implements Resolve<Nastavnik> {
  constructor(private nastavniciService: NastavnikService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Nastavnik> | Nastavnik {
    return this.nastavniciService.getNastavnikById(route.params['id']);
  }
}

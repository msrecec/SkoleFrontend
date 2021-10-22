import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Smjer } from 'src/app/model/smjer/smjer-model';
import { SmjeroviService } from 'src/app/services/smjerovi.service';

@Injectable({
  providedIn: 'root',
})
export class SmjeroviResolver implements Resolve<Smjer[]> {
  constructor(private smjeroviService: SmjeroviService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Smjer[]> {
    return this.smjeroviService.getSmjerByIdUstanova(route.params['id']);
  }
}

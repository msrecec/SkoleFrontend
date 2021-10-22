import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UlogaIzvrsitelja } from '../model/uloga-izvrsitelja/uloga-izvrsitelja-model';

@Injectable({
  providedIn: 'root',
})
export class UlogaIzvrsiteljaService {
  private smjerURL = 'http://localhost:8080/api/v1/ulogaIzvrsitelja';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getUlozaIzvrsiteljaByIdKolegijAndIdNastvanik(
    idNastavnik: number,
    idKolegij: number
  ): Observable<UlogaIzvrsitelja> {
    return this.http
      .get<UlogaIzvrsitelja>(
        `${this.smjerURL}/nastavnici?nastavnikId=${idNastavnik}&kolegijId=${idKolegij}`
      )
      .pipe(
        tap((_) =>
          console.log(
            `getting smjerovi by id ustanova ${idNastavnik} and id kolegij ${idKolegij}`
          )
        ),
        catchError(
          this.handleError<UlogaIzvrsitelja>(
            `error getting smjerovi by id ustanova ${idNastavnik} and id kolegij ${idKolegij}`
          )
        )
      );
  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}

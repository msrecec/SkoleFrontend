import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Izvrsitelj } from '../model/izvrsitelj/izvrsitelj-model';

@Injectable({
  providedIn: 'root',
})
export class IzvrsiteljiService {
  private izvrsiteljiURL = 'http://localhost:8080/api/v1/izvrsitelji';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getIzvrsiteljByIdNastavnikAndIdKolegij(
    idNastavnik: number,
    idKolegij: number
  ) {
    return this.http
      .get<Izvrsitelj>(
        `${this.izvrsiteljiURL}/nastavnici/kolegiji?nastavnikId=${idNastavnik}&kolegijId=${idKolegij}`
      )
      .pipe(
        tap((_) =>
          console.log(
            `getting izvrsitelji by id nastavnik ${idNastavnik} and id kolegij ${idKolegij}`
          )
        ),
        catchError(
          this.handleError<Izvrsitelj>(
            `error getting izvrsitelji by id nastavnik ${idNastavnik} and id kolegij ${idKolegij} `
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

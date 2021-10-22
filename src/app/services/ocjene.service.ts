import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Ocjena } from '../model/ocjena/ocjena-model';

@Injectable({
  providedIn: 'root',
})
export class OcjeneService {
  private ocjeneURL = 'http://localhost:8080/api/v1/ocjene';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getOcjenaByIdStudentAndIdKolegij(
    idStudent: number,
    idKolegij: number
  ): Observable<Ocjena> {
    return this.http
      .get<Ocjena>(
        `${this.ocjeneURL}/studenti/kolegiji?studentId=${idStudent}&kolegijId=${idKolegij}`
      )
      .pipe(
        tap((_) =>
          console.log(
            `getting ocjene by id kolegij ${idKolegij} and id student ${idStudent}`
          )
        ),
        catchError(
          this.handleError<Ocjena>(
            `error getting ocjene by idKolegij ${idKolegij} and idStudent ${idStudent}`
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

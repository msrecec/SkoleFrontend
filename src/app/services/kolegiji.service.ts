import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Kolegij } from '../model/kolegij/kolegij-model';

@Injectable({
  providedIn: 'root',
})
export class KolegijiService {
  private kolegijURL = 'http://localhost:8080/api/v1/kolegiji';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getKolegijiBySmjerId(idSmjer: number): Observable<Kolegij[]> {
    return this.http
      .get<Kolegij[]>(`${this.kolegijURL}?idSmjer=${idSmjer}`)
      .pipe(
        tap((_) => console.log(`getting kolegiji by idSmjer = ${idSmjer}`)),
        catchError(
          this.handleError<Kolegij[]>(
            `error getting kolegiji from idSmjer = ${idSmjer}`
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

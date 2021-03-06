import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Smjer } from '../model/smjer/smjer-model';

@Injectable({
  providedIn: 'root',
})
export class SmjeroviService {
  private smjerURL = 'http://localhost:8080/api/v1/smjerovi';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getSmjerByIdUstanova(idUstanova: number): Observable<Smjer[]> {
    return this.http
      .get<Smjer[]>(`${this.smjerURL}?idUstanova=${idUstanova}`)
      .pipe(
        tap((_) =>
          console.log(`getting smjerovi by id ustanova ${idUstanova}`)
        ),
        catchError(
          this.handleError<Smjer[]>(
            `getting smjerovi by id ustanova ${idUstanova}`
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Ustanova } from '../model/ustanova/ustanova-model';

@Injectable({
  providedIn: 'root',
})
export class UstanoveService {
  private ustanovaURL = 'http://localhost:8080/api/v1/ustanove';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  findAll(): Observable<Ustanova> {
    return this.http.get<Ustanova>(this.ustanovaURL, this.httpOptions).pipe(
      tap((_) => console.log(`getting all ustanove`)),
      catchError(this.handleError<Ustanova>('error getting all ustanove'))
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

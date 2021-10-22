import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Ustanova } from '../model/ustanova/ustanova-model';
import { UstanovaPaginated } from '../model/ustanova/ustanova-paginated-model';

@Injectable({
  providedIn: 'root',
})
export class UstanoveService {
  private ustanovaURL = 'http://localhost:8080/api/v1/ustanove';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  findAll(): Observable<Ustanova[]> {
    return this.http.get<Ustanova[]>(this.ustanovaURL, this.httpOptions).pipe(
      tap((_) => console.log(`getting all ustanove`)),
      catchError(this.handleError<Ustanova[]>('error getting all ustanove'))
    );
  }

  findAllPaginated(
    page: number = 0,
    pageSize: number = 10
  ): Observable<UstanovaPaginated> {
    return this.http
      .get<UstanovaPaginated>(
        `${this.ustanovaURL}/page?page=${page}&pageSize=${pageSize}`,
        this.httpOptions
      )
      .pipe(
        tap((_) =>
          console.log(
            `getting ustanove by page ${page} with pageSize ${pageSize}`
          )
        ),
        catchError(
          this.handleError<UstanovaPaginated>(
            `error getting ustanove by page ${page} with pageSize ${pageSize}`
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

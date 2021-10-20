import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Nastavnik } from '../model/nastavnik/nastavnik-model';
import { NastavnikPaginated } from '../model/nastavnik/nastavnik-paginated-model';

@Injectable({
  providedIn: 'root',
})
export class NastavnikService {
  private nastavnikURL = 'http://localhost:8080/api/v1/nastavnici';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getNastavnikById(id: number = 1): Observable<Nastavnik> {
    return this.http.get<Nastavnik>(`${this.nastavnikURL}/id/${id}`).pipe(
      tap((_) => console.log(`Fetched nastavnici by id ${id}`)),
      catchError(this.handleError<Nastavnik>(`Get nastavnici by id ${id}`))
    );
  }

  getNastavniciPaginated(
    page: number = 0,
    pageSize: number = 10
  ): Observable<NastavnikPaginated> {
    return this.http
      .get<NastavnikPaginated>(
        `${this.nastavnikURL}/page?page=${page}&pageSize=${pageSize}`
      )
      .pipe(
        tap((_) =>
          console.log(
            `Fetched nastavnici from page ${page} with pagesize ${pageSize}`
          )
        ),
        catchError(
          this.handleError<NastavnikPaginated>(
            `get paginated nastavnik from page ${page} with pagesize ${pageSize}`
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NastavnikCommand } from '../command/nastavnik/nastavnik-command';
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

  getNastavnikFTS(
    input: string,
    page: number = 0,
    pageSize: number = 10
  ): Observable<NastavnikPaginated> {
    return this.http
      .get<NastavnikPaginated>(
        `${this.nastavnikURL}/fts?input=${input}&page=${page}&pageSize=${pageSize}`
      )
      .pipe(
        tap((_) =>
          console.log(
            `fetched nastavnici from page ${page} from input ${input}`
          )
        ),
        catchError(
          this.handleError<NastavnikPaginated>(
            `get nastavnici from page ${page} by input ${input}`
          )
        )
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

  postNastavnik(nastavnik: NastavnikCommand): Observable<Nastavnik> {
    return this.http
      .post<NastavnikCommand>(this.nastavnikURL, nastavnik, this.httpOptions)
      .pipe(
        tap((_) =>
          console.log(`created nastavnik with name: ${nastavnik.ime}`)
        ),
        catchError(
          this.handleError<any>(`create nastavnik with name ${nastavnik.ime}`)
        )
      );
  }

  putNastavnik(nastavnik: NastavnikCommand): Observable<Nastavnik> {
    return this.http
      .put<NastavnikCommand>(this.nastavnikURL, nastavnik, this.httpOptions)
      .pipe(
        tap((_) => console.log(`updated nastavnik with id: ${nastavnik.id}`)),
        catchError(
          this.handleError<any>(`update nastavnik with id ${nastavnik.id}`)
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

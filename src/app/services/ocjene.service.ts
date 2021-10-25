import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { OcjenaCommand } from '../command/ocjena/ocjena-command';
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

  postOcjena(ocjena: OcjenaCommand): Observable<Ocjena> {
    return this.http
      .post<OcjenaCommand>(this.ocjeneURL, ocjena, this.httpOptions)
      .pipe(
        tap((_) => console.log(`created ocjena with value ${ocjena.ocjena}`)),
        catchError(
          this.handleError<any>(
            `error while creating ocjena with value ${ocjena.ocjena}`
          )
        )
      );
  }

  postOcjene(ocjene: OcjenaCommand[]): Observable<Ocjena[]> {
    return this.http
      .post<OcjenaCommand[]>(
        this.ocjeneURL + '/batch',
        ocjene,
        this.httpOptions
      )
      .pipe(
        tap((_) =>
          console.log(`created batch ocjene of size ${ocjene.length}`)
        ),
        catchError(
          this.handleError<any>(
            `error while creating ocjene of size ${ocjene.length}`
          )
        )
      );
  }

  putOcjena(ocjena: OcjenaCommand): Observable<Ocjena> {
    return this.http
      .put<OcjenaCommand>(this.ocjeneURL, ocjena, this.httpOptions)
      .pipe(
        tap((_) => console.log(`updated ocjena with id ${ocjena.id}`)),
        catchError(
          this.handleError<any>(
            `error while updating ocjena with id ${ocjena.id}`
          )
        )
      );
  }

  deleteOcjena(idOcjena: number): Observable<void> {
    return this.http
      .delete<number>(`${this.ocjeneURL}/id/${idOcjena}`, this.httpOptions)
      .pipe(
        tap((_) => console.log(`deleting ocjena with id ${idOcjena}`)),
        catchError(
          this.handleError<any>(`error deleting ocjena with id ${idOcjena}`)
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

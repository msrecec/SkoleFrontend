import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../model/student/student-model';
import { catchError, tap } from 'rxjs/operators';
import { StudentPaginated } from '../model/student/student-paginated-model';
import { StudentCommand } from '../command/student/student-command';
import { Kolegij } from '../model/kolegij/kolegij-model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentURL = 'http://localhost:8080/api/v1/studenti';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getStudentById(id: number = 1): Observable<Student> {
    return this.http.get<Student>(`${this.studentURL}/id/${id}`).pipe(
      tap((_) => console.log(`Fetched students by id: ${id}`)),
      catchError(this.handleError<Student>(`get student by id: ${id}`))
    );
  }

  getStudentByIdKolegij(idKolegij: number): Observable<Student[]> {
    return this.http
      .get<Student[]>(`${this.studentURL}/kolegiji?idKolegij=${idKolegij}`)
      .pipe(
        tap((_) => console.log(`get studenti by id kolegij = ${idKolegij}`)),
        catchError(
          this.handleError<Student[]>(
            `error getting studenti by id kolegij = ${idKolegij}`
          )
        )
      );
  }

  getStudentsFTS(
    input: string,
    page: number = 0,
    pageSize: number = 10
  ): Observable<StudentPaginated> {
    return this.http
      .get<StudentPaginated>(
        `${this.studentURL}/fts?input=${input}&page=${page}&pageSize=${pageSize}`
      )
      .pipe(
        tap((_) =>
          console.log(`fetched students from page ${page} from input ${input}`)
        ),
        catchError(
          this.handleError<StudentPaginated>(
            `get students from page ${page} by input ${input}`
          )
        )
      );
  }

  getStudentsPaginated(
    page: number = 0,
    pageSize: number = 10
  ): Observable<StudentPaginated> {
    return this.http
      .get<StudentPaginated>(
        `${this.studentURL}/page?page=${page}&pageSize=${pageSize}`
      )
      .pipe(
        tap((_) =>
          console.log(
            `Fetched paginated students from page ${page} with pagesize ${pageSize}`
          )
        ),
        catchError(
          this.handleError<StudentPaginated>(
            `get paginated students from page ${page}`
          )
        )
      );
  }

  getStudentsByIdSmjerPaginated(
    idSmjer: number,
    page: number = 0,
    pageSize: number = 10
  ): Observable<StudentPaginated> {
    return this.http
      .get<StudentPaginated>(
        `${this.studentURL}/smjerovi/id/${idSmjer}?page=${page}&pageSize=${pageSize}`
      )
      .pipe(
        tap((_) =>
          console.log(
            `getting all students from page ${page} with pageSize ${pageSize}`
          )
        ),
        catchError(
          this.handleError<StudentPaginated>(
            `error while getting students from page ${page} with pageSize ${pageSize}`
          )
        )
      );
  }

  postStudent(student: StudentCommand): Observable<Student> {
    return this.http
      .post<StudentCommand>(this.studentURL, student, this.httpOptions)
      .pipe(
        tap((_) => console.log(`created student with name: ${student.ime}`)),
        catchError(
          this.handleError<any>(`create student with name ${student.ime}`)
        )
      );
  }
  putStudent(student: StudentCommand): Observable<Student> {
    return this.http
      .put<StudentCommand>(this.studentURL, student, this.httpOptions)
      .pipe(
        tap((_) => console.log(`updated student with id: ${student.id}`)),
        catchError(
          this.handleError<any>(`updated student with id ${student.id}`)
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

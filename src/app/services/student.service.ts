import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../model/student/student-model';
import { catchError, tap } from 'rxjs/operators';
import { StudentPaginated } from '../model/student/student-paginated-model';

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

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}

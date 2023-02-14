import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Student } from '../studentModel/student.model';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // api of url
  url = "https://localhost:44348/api/api/"
  //to set BehaviorSubject
  private student: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);
  constructor(private http: HttpClient) { }

  //display list of all student 
  student_List() {
    return this.http.get(this.url);
  }

  //add of student 

  add_Student(stud: Student) {
    debugger

    return this.http.post<any>(this.url + "AddStudent/", stud, this.httpOptions);
  }
  //delete the student
  delete(stud: number) {
    return this.http.delete<any>(this.url + "Delete/" + stud, this.httpOptions);
  }
  // display error message in console log
  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
  // get details of student by id
  getStudentById(id: number):Observable<Student>{
    debugger
    return this.http.get<Student>(this.url + "getStudentById/" + id, this.httpOptions).pipe(
      tap(value => console.log(value.name + " " + value.email_Id + " " + value.mobile_No + " " + value.pincode + " " + value.address)),
      catchError(this.handleError)
    );
  }

  //transfer data id one component to another
  getStudentById1(id: Student) {
    this.student.next(id);
  }
  //passing header to each request
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //to update the data of student
  update(id, post): Observable<Student> {
    return this.http.put<Student>(this.url + 'Update/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  //to return BehaviorSubject
  getMethod() {
    return this.student.asObservable();
  }
  //use to handle  error
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  isTaken(email: string) {
    return this.http.get<any>(this.url).pipe(
      
      map((data:any) => data.filter((d: { email: string; }) => d.email === email)),
      map((data: any) =>  data.length > 0),
      catchError((err) => { 
        console.log('error', err);
        return throwError(err);
      })
    );
  }
  
  getUserByEmail(email: string,id:number=0) {
      debugger
      return this.http.get<any>(`${this.url+"Email_Id/"}${email}/${id}`)
  }
 
 
  // isTaken(email: string) {
  //   return this.http.get<any>(this.url).pipe(

  //     map((data: any) => data.filter((d: { email: string; }) => d.email === email)),
  //     map((data: any) => data.length > 0),
  //     catchError((err) => {
  //       console.log('error', err);
  //       return throwError(err);
  //     })
  //   );
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = 'http://localhost:3000/enroll';

  constructor( private httpClient: HttpClient) { }

  enroll(user: User) {

   return this.httpClient.post<any>(this.url, user).pipe(
     catchError(this.errorHandler)
   );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}

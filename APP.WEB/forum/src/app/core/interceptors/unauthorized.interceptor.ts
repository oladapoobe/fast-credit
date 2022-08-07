import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Injectable()

export class UnauthorizedInterceptor implements HttpInterceptor {
  //constructor(private router: Router) { }
   errorMessage = '';
  constructor(private router: Router) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
      
          if (error.status === 0) {
          
            Swal.fire('Please wait', this.errorMessage + 'Error in connecting to server, please contact Technology', 'error');
          } else if (error.status !== 401){
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error}`;
              console.log(errorMessage);
              Swal.fire('Please wait', errorMessage + ' , please contact Technology', 'error');

            } else {
              // server-side error
              errorMessage = `${error.error}`;
              console.log(errorMessage);
              Swal.fire('Please wait', errorMessage + '', 'error');

            }

         }
          return throwError(this.errorMessage);
        })
      )
  }
}

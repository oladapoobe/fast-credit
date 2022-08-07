

//import { Injectable } from '@angular/core';
//import {
//  HttpInterceptor,
//  HttpRequest,
//  HttpResponse,
//  HttpHandler,
//  HttpEvent,
//  HttpErrorResponse
//} from '@angular/common/http';

//import { from, Observable, of, throwError } from 'rxjs';
//import { map, catchError, tap, filter, switchMap, mergeMap } from 'rxjs/operators';


//@Injectable()
//export class AuthInterceptor implements HttpInterceptor {

//  constructor() {

//  }

//  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


//    //request = request.clone({
//    //  setHeaders: { Platform: 'Web' },

//    //});

//    //if (!request.headers.has('Content-Type')) {

//    //  request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=utf-8') });
//    //  request = request.clone({ headers: request.headers.set('Platform', 'Web') });
//    //}


//    return next.handle(request).pipe(
//      map((event: HttpEvent<any>) => {
//        if (event instanceof HttpResponse) {
//          // console.log('event--->>>', event);
//          // end loading page with preloader if successful
//        }
//        return event;
//      }),
//      catchError((error: HttpErrorResponse) => {
//        return throwError(error);
//      }));

//  }









//  /////////////////////////
//  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//  //     const token: string = localStorage.getItem('access_token');

//  //     if (token) {
//  //         request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
//  //     }

//  //     if (!request.headers.has('Content-Type')) {
//  //         request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
//  //     }

//  //     return next.handle(request).pipe(
//  //         map((event: HttpEvent<any>) => {
//  //             if (event instanceof HttpResponse) {
//  //                 // console.log('event--->>>', event);
//  //             }
//  //             return event;
//  //         }));
//  // }
//}

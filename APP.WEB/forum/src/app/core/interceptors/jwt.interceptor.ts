import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // add JWT auth header if a user is logged in for API requests

    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (!request.headers.has('Content-Type')) {

      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=utf-8') });
      request = request.clone({ headers: request.headers.set('Platform', 'Web') });
  }


    return next.handle(request);
  }
}

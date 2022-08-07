import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COOKIE SERVICE
import { CookieService } from 'ngx-cookie-service';
// HTTP CLIENT
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// SNACKBAR MODULE FOR NOTIFICATIONS
import { MatSnackBarModule } from '@angular/material/snack-bar';
// LOADING SPINNER
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinner } from '@shared/components';
// HTTP INTERCEPTOR
/*import { AuthInterceptor } from './interceptors/AuthInterceptor';*/
import { ErrorInterceptor } from './interceptors/ErrorInterceptor';
@NgModule({
  declarations: [LoadingSpinner],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    OverlayModule,
    MatProgressSpinnerModule 
  ],
  providers: [
/*    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },*/
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    CookieService

  ],
})
export class CoreModule {}

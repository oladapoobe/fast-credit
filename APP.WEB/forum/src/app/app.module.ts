import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { WINDOW_PROVIDERS } from '../app/service/window.providers';

import { CoreModule } from './core/core.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,

  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    CoreModule,
   
    
  ],
 
  providers: [

    WINDOW_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

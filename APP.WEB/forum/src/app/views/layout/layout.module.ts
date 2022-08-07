import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';






@NgModule({
  declarations: [BaseComponent, NavbarComponent, FooterComponent, HeaderComponent],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
   
    
  ],
  //exports: [
  //  CommentsComponent,


  //],


})
export class LayoutModule { }

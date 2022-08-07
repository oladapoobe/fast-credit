



import { Component, ViewChild, TemplateRef, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  idleState = 'Not started.';
  timedOut = false;

  title = 'angular-idle-timeout';


  constructor(
    private router: Router) {
    


  }


}


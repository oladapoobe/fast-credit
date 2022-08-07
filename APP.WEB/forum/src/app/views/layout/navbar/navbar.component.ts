


import { Component, OnInit, Inject, Renderer2, HostListener } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';


import { MenuItem } from './menu.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [];
  UserName: any;
  Email: any;
  FullName: any;
  profileimage: any;


  constructor(
  
    private renderer: Renderer2,
    private router: Router,
   
  ) { }

  ngOnInit(): void {

  

    /**
    * closing the header menu after route change in tablet/mobile devices
    */
  
  }




}

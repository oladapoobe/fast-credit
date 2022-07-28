import { Component, OnInit } from '@angular/core';

// MODELS
import { PROFILE } from '@models/auth';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser!: Promise<PROFILE | null>;
  constructor() {}

  ngOnInit(): void {
    
  }

}

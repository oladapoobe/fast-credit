import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() ChatgroupId: number;
  AllAdvert: any;
  Ads1: any;
  Ads2: any;
  Ads3: any;
  Ads4: any;
  Adsimg: any;
  NewestUser: any;
  ActiveUser: any;
  currentPageNumber : any;
  pageSize: any;



  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentPageNumber = 1;
    this.pageSize = 4;

  }

  
  NavigateAds(ads: any) {
    if (!ads.adsImage) {
      this.router.navigate(['/general/adverts']);
    } else {
      window.open(ads.adsUrl, "_blank");

    }
  }

}

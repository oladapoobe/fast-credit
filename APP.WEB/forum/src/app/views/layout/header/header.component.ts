import { Component, OnInit } from '@angular/core';
import { get } from "scriptjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ProfileDetails: any;
  FullName: any;
  Role: any;
  Email: any;
  profileimage: any;
  hideapproval: boolean;
  login: boolean;
  constructor() { }

  ngOnInit(): void {
    get("assets/dependencies/jquery/js/jquery.min.js", () => { });
    get("assets/dependencies/popper.js/js/popper.min.js", () => { });
    get("assets/dependencies/bootstrap/js/bootstrap.min.js", () => { });
    get("assets/dependencies/imagesloaded/js/imagesloaded.pkgd.min.js", () => { });
    get("assets/dependencies/isotope-layout/js/isotope.pkgd.min.js", () => { });
    get("assets/dependencies/slick-carousel/js/slick.min.js", () => { });
    get("assets/dependencies/sal/sal.js", () => { });
    get("assets/dependencies/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js", () => { });
    get("assets/dependencies/magnific-popup/js/jquery.magnific-popup.min.js", () => { });
    get("assets/dependencies/bootstrap-validator/js/validator.min.js", () => { });
    get("assets/dependencies/select2/js/select2.min.js", () => { });
    get("assets/dependencies/elevate-zoom/jquery.elevatezoom.js", () => { });
    get("assets/assets/js/app.js", () => { });

    this.FullName = localStorage.getItem('FullName');
    this.Role = localStorage.getItem('Role');
    this.Email = localStorage.getItem('Email');

    this.ProfileDetails = JSON.parse(localStorage.getItem('UserDetails') || '{}');
    this.profileimage = localStorage.getItem('UserProfileImage');

    if (this.Role == "AppAdmin" || this.Role == "AppSuperUser") {
      this.hideapproval = true;
    } else {
      this.hideapproval = false;

    }

    if (this.FullName) {
      this.login = true;
    }
    else {
      this.login = false;
    }

  }

 
   openNav() {
    document.getElementById("mySidebar")!.style.width = "250px";
  document.getElementById("main")!.style.marginLeft = "250px";
}

 closeNav() {
  document.getElementById("mySidebar")!.style.width = "0";
  document.getElementById("main")!.style.marginLeft = "0";
}

}




            


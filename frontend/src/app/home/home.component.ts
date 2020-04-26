import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare function initPage(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor() {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['section_home', 'section_about', 'section_why', 'section_contact'],
      menu: '#menu',
      navigation: true,
    };
  }
  
  ngOnInit(): void {
    (function ($) {
      console.log("Test");
      initPage();
    })(jQuery);
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}

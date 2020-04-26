import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare function initPage(): any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      initPage();
    })(jQuery);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-notices',
  templateUrl: './site-notices.component.html',
  styleUrls: ['./site-notices.component.less']
})
export class SiteNoticesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  exitSiteNotices(){
    document.getElementById('siteNoticesContent').classList.add('hidden');
  }

}

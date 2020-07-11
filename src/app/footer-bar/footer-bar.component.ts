import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.less']
})
export class FooterBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displaySiteNotices(){
    document.getElementById('siteNoticesContent').classList.remove('hidden');
  }
  exitSiteNotices(){
    document.getElementById('siteNoticesContent').classList.add('hidden');
  }

}

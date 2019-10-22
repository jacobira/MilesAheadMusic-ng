import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'Miles Ahead Music';

  constructor(private router: Router, private titleService: Title){
    this.titleService.setTitle(this.title);
  }



  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.less']
})
export class HeaderBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = function(){
      growShrinkLogo();  
    }
    function growShrinkLogo(){
      let logo = document.getElementById('logo');
      if (document.documentElement.scrollTop || document.body.scrollTop > 75){
        logo.classList.remove('inflate');
      } else {
        logo.classList.add('inflate');
      }
    }
  }
}

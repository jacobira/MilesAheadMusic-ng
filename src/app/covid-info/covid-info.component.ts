import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.less']
})
export class CovidInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayForm(){
    document.getElementById('contactForm').classList.remove('hidden');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayForm(){
    document.getElementById('contactForm').classList.remove('hidden');
  }

}

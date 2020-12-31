var hubspot: any;

import { Component, OnInit } from '@angular/core';
import { ServerLinkService } from '../server-link.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent implements OnInit {

  constructor(private serverLink: ServerLinkService) { }

  ngOnInit() {
    
  }

  

  parentFirstName: string = "";
  parentLastName: string = "";
  phoneNum: string = "";
  emailAddress: string = "";
  studentFirstName: string = "";
  studentLastName: string = "";
  instrument: string = "";

  hideForm(){
    document.getElementById('formStatus').classList.add('hidden');
    this.parentFirstName = "";
    this.parentLastName = "";
    this.phoneNum = "";
    this.emailAddress = "";
    this.studentFirstName = "";
    this.studentLastName = "";
    this.instrument = "";
    document.getElementById('contactForm').classList.add('hidden');
  }

  submitForm(){
    if(this.parentFirstName.length>0 && this.parentLastName.length>0 && this.phoneNum.length>9 &&
    this.emailAddress.includes('@') && this.instrument.length>0){
      this.serverLink.submitContactForm(this.parentFirstName, this.parentLastName, this.phoneNum, 
        this.emailAddress, this.studentFirstName, this.studentLastName, this.instrument);
    } else {
      document.getElementById('pleaseComplete').classList.remove('hidden');
    }
  }
}

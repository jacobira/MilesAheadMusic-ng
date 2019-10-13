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

  parentFirstName: string = "John";
  parentLastName: string = "Doe";
  phoneNum: string = "8019605144";
  emailAddress: string = "none@email.com";
  studentFirstName: string = "Suzie";
  studentLastName: string = "Doe";
  instrument: string = "Saxophone";

  hideForm(){
    document.getElementById('contactForm').classList.add('hidden');
  }

  submitForm(){
    this.serverLink.submitContactForm(this.parentFirstName, this.parentLastName, this.phoneNum, 
    this.emailAddress, this.studentFirstName, this.studentLastName, this.instrument);
  }
}

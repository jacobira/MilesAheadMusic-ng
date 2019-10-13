import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  parentFirstName: string = "John";
  parentLastName: string = "Doe";
  phoneNum: string = "8019605144";
  emailAddress: string = "none@email.com";
  studentFirstName: string = "Suzie";
  studentLastName: string = "Doe";
  instrument: string = "Saxophone";

}

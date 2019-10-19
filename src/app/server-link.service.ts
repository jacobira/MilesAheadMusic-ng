import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ServerLinkService {

  constructor(private ioSocket: Socket) { 
    
  }

  submitContactForm(parentFirst, parentLast, phoneNum, email, studentFirst, studentLast, instrument){
    var form = {
      firstname: parentFirst,
      lastname: parentLast,
      phone: phoneNum,
      email: email,
      studentfirst: studentFirst,
      studentlast: studentLast,
      instrument: instrument
    };
    this.ioSocket.emit("newFormSubmit", JSON.stringify(form));
    this.ioSocket.on('formConfirm', () => {
      console.log('Form successfully submitted');
      document.getElementById('formStatus').classList.remove('hidden');
      document.getElementById('pleaseComplete').classList.add('hidden');
    });
  }
}

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ServerLinkService {

  constructor(private socket: Socket) { 
    
  }

  submitContactForm(parentFirst, parentLast, phoneNum, email, studentFirst, studentLast, instrument){

  }
}

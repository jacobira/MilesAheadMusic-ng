import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewBackgroundsService {

  constructor() { }

  images: string[] = ["studioPic1", "studioPic2", "studioPic3"];

  indexCounter: number = 0;

  pickImage(){
    if (this.indexCounter < this.images.length){
      let response = this.images[this.indexCounter];
      this.indexCounter++;
      return response;
    }
    if (this.indexCounter >= this.images.length){
      this.indexCounter = 1;
      return this.images[0];
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { 
    this.reviews = [
      {
          "reviewerName":"Amy Stoddard",
          "relationship":"Student Parent",
          "review":`We've been looking for a trombone teacher for my son for years. 
          We finally found one we love! My son had marching band pass offs on Friday, 
          but didn't get the music until Thursday afternoon. His teacher, in 30 
          minutes, got him to memorize the whole song and taught him valuable lessons 
          on memorization. I'm super impressed.`,
          "image": "studioPic1.jpg",
          "reviewId": "review1"
      },
      {
          "reviewerName":"Hailey Allen",
          "relationship":"Student Parent",
          "review":`My daughter had learned so much taking piano lessons here! She's 
          now writting her own music now too! We love it.`,
          "image": "studioPic2.jpg",
          "reviewId": "review2"
      },
      {
          "reviewerName":"Keanna Zarate",
          "relationship":"Student Parent",
          "review":`We have loved Miles Ahead Music! We were looking for a saxophone 
          instructor for our son and found Emily! We've been amazed at the progress 
          he's made. She's helped him add emotion and style to his playing, he enjoys 
          working with her and always comes home with great things to say!! Highly 
          recommended!`,
          "image": "studioPic3.jpg",
          "reviewId": "review3"
      }
    ];

    this.instructors = [

    ]
  }

  ngOnInit() {
     window.addEventListener('scroll', () => {this.mobileScrollStackCheck()});
  }

  reviews: any[] = [];
  instructors: any[] = [];

  mobileScrollStackCheck(){
    for(let i=0; i<this.instructors.length; i++){

      let card = document.getElementById(this.instructors[i].reviewId);

      let rect = card.getBoundingClientRect();
      if(rect.top >= 0 && rect.left >= 0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight) && 
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
        console.log("to top of stack");
        this.toTopOfStack(this.instructors[i].reviewId);
        card.classList.add("scaled");
        for(let a=0; a<this.instructors.length; a++){
          if(a !== i){
              document.getElementById(this.instructors[a].reviewId).classList.remove("scaled");
          }
        }
      } 
    }
  }
  toTopOfStack(boxId){
    let el = document.getElementById(boxId);
    el.style.zIndex = `${this.instructors.length}`;
    for (let i = 0; i < this.instructors.length; i++){
      if (this.instructors[i].reviewId === boxId){
        let lowIndexCounter = 1;
        let highIndexCounter = this.instructors.length - 1;
        for (let a = 0; a < this.instructors.length; a++){
          if (a < i){
            document.getElementById(this.instructors[a].reviewId).style.zIndex = `${lowIndexCounter}`;
            lowIndexCounter++;
          }
          if (a > i){
            document.getElementById(this.instructors[a].reviewId).style.zIndex = `${highIndexCounter}`;
            highIndexCounter--;
          }
        }
        break;
      }
    }
  }
}

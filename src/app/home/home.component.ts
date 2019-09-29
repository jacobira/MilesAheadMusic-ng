import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reviews: any[] = [
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

}

import { Component, Input, OnInit } from '@angular/core';
import { ReviewBackgroundsService } from '../review-backgrounds.service';

@Component({
  selector: 'app-single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.less']
})
export class SingleReviewComponent implements OnInit {

  constructor(private backgroundService: ReviewBackgroundsService) {
    this.getBackground();
  }

  ngOnInit() {
    
  }

  getBackground(){
    let image = this.backgroundService.pickImage();
    console.log(image);
    this.backgroundUrl = "url('../../assets/site-media/" + image + "')"
  }

  backgroundUrl: string;

  @Input() reviewer: string;
  @Input() relationship: string;
  @Input() review: string;
  @Input() reviewId: string;

}

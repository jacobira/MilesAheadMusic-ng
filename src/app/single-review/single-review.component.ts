import { Component, Input, OnInit } from '@angular/core';
import { ReviewBackgroundsService } from '../review-backgrounds.service';

@Component({
  selector: 'app-single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.less']
})
export class SingleReviewComponent implements OnInit {

  constructor(private backgroundServ: ReviewBackgroundsService) {
    this.backgroundImgClass = this.backgroundServ.pickImage();
  }

  ngOnInit() {
    
  }


  backgroundImgClass: string;

  @Input() reviewer: string;
  @Input() relationship: string;
  @Input() review: string;
  @Input() reviewId: string;

}

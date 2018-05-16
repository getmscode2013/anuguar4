import { Component, OnInit } from '@angular/core';
import { ReviewService}  from '../../../review.service';
import { review}  from '../../../review';

@Component({
  selector: 'app-reviewlist',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css']
})
export class ReviewlistComponent implements OnInit {

  reviewlist : review[];
  constructor(private rev : ReviewService) { }
  ngOnInit() {
    this.rev.getReviews().subscribe(
      (data: review[]): void=>{

        this.reviewlist = data;
      },
      (error=>{alert("check it.."); }
    )
    )};

}

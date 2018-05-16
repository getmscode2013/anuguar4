import { Component, OnInit } from '@angular/core';
import { CourseService} from '../../../course.service'
import { course} from '../../../course'

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  pricerange : string = "All Course";
  courselist : course[];
  constructor(public cs:CourseService) {
    this.courselist = cs.getCources();
   }

  ngOnInit() {
  }

}

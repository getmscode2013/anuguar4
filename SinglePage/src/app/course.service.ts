import { Injectable } from '@angular/core';
import {course}  from './course'

@Injectable()
export class CourseService {
  private courselist : course[];

  constructor() { 
    this.courselist = 
        [ 
          {
            name : "angular",
            image : "angular.png",
            price : "5000",
            description : "Google single page application"
          },
          {
            name : "Java",
            image : "java.png",
            price : "4000",
            description : "Creating the enterprise application"
          },
          {
            name : "ASP",
            image : "asp.jpg",
            price : "3000",
            description : "Asp.net tranin cources"
          },
          {
            name : "css3",
            image : "css3.png",
            price : "2000",
            description : "Css 3 traning cources"
          },
          {
            name : "Python",
            image : "python.png",
            price : "6000",
            description : "python traning cources"
          }
        ];
    }

    getCources():course[]
    {
      return this.courselist;
    }

}

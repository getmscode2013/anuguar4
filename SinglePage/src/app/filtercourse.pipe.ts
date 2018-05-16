import { Pipe, PipeTransform } from '@angular/core';
import { course } from './course';

@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(courses: course[], pricerange:  string): course[] {
   
    let temp : course[] = []
    if(pricerange == "High price")
    {
      for(let x in courses)
      {
        if(parseInt(courses[x].price) > 5000)
        {
          temp.push(courses[x]);
        }
      }
      return temp;
    }
    else if(pricerange == "Modrate Price")
    {
      for(let x in courses)
      {
        if(parseInt(courses[x].price) > 4000)
        {
          temp.push(courses[x]);
        }
      }
      return temp;
    }
    else if(pricerange == "Normal Price")
    {
      for(let x in courses)
      {
        if(parseInt(courses[x].price) > 3000)
        {
          temp.push(courses[x]);
        }
      }
      return temp;
    }
    else 
    {
      return courses;
    }
    
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offercode'
})
export class OffercodePipe implements PipeTransform {

  transform(dummy : any, price : any): any {
    if(price >  2000)
    {
      return "Offer20 (20% discount)";
    }
    else if (price >=  3000)
    {
      return "Offer30 (30% discount)";
    }
    else if (price >=  4000)
    {
      return "Offer40 (40% discount)";
    }
    else 
    {
      return "No Offer";
    }
  }

}

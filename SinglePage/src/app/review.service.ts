import { Injectable } from '@angular/core';
import {review } from './review';
import {Observable} from 'rxjs/observable'
import {HttpClient} from '@angular/common/http'


@Injectable()
export class ReviewService {


  constructor(private http: HttpClient ) { }

  getReviews():Observable<object>{
    return this.http.get("http://139.59.9.236:8898/rest-api/reviews")
  }
}

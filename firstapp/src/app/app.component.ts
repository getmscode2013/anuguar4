import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 App';
  technologies : string[] = ['Java','.Net','angular','React']
  headings: string[] = ["Animals","statinoiries"]
  childdata : string[][] = [
    ["Rat","Cat","dog"],
    ["Pen","Pensil","book"]
  ];

  reciveItems(data, childcount)
  {
    this.childdata[childcount].push(data);
  }
}

import { Component, OnInit,Input,Output, EventEmitter, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, DoCheck,OnChanges {
  @Input('title') info : string;
    unit : string = "unit1";
   @Input('items') items : string[];
   @Output('send')emitdata : EventEmitter<string>= new EventEmitter<string>();
   current : string;
  

 
   changeColor() : void{
    if(this.unit == "unit1") {  this.unit = "unit2"; }
    else{ this.unit = "unit1";}
   }

   addItems(){
     this.emitdata.emit(this.current);
   }

   constructor() {  console.log("Constructor the Child");}

  ngOnInit() {  console.log("Init the Child")  }

  ngOnChanges() {  console.log("OnChange the Child"+ this.info)  }

  ngDoCheck(){  console.log("Ng Do check call" ) }
  

}

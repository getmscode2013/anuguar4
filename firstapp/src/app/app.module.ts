import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  /// what are the compment which we creates is come under the decalataions like pipes, 
  ///direactive and filter
  declarations: [
    AppComponent,
    ChildComponent
  ],
  /// It will use to imports the modules
  imports: [
    BrowserModule, FormsModule
  ],

  // It will use to register the services
  providers: [],

  /// It will use for the entry pot component like index 
  bootstrap: [AppComponent]
})
export class AppModule { }

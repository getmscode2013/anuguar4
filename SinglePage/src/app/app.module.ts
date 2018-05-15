import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './leftbody/banner/banner.component';
import { HomeComponent } from './routes/home/home.component';
import { OfficeComponent } from './routes/office/office.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { OffersComponent } from './routes/offers/offers.component';
import { NewcourcesComponent } from './routes/newcources/newcources.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';

const routes = [
  {path : "",component:HomeComponent},
  {path : "offices",component:OfficeComponent},
  {path : "offers",component:OffersComponent},
  {path : "newcources",component:NewcourcesComponent},
  {path : "reviews",component:ReviewsComponent},
  {path : "vclasses",component:VirtualclassComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    HomeComponent,
    OfficeComponent,
    OfficesComponent,
    OffersComponent,
    NewcourcesComponent,
    ReviewsComponent,
    VirtualclassComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

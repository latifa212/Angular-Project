import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';
import { NewapiservicesService } from './service/newapiservices.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AllMealsComponent } from './all-meals/all-meals.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AllMealsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [NewapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

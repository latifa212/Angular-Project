import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { AboutComponent } from './about/about.component';
import { AllMealsComponent } from './all-meals/all-meals.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
      {path:'', component:TopheadingComponent},
      {path: 'about', component: AboutComponent},
      {path: 'all-meals', component: AllMealsComponent},
      {path: 'details/:id', component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

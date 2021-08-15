import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { MealComponent } from './meal/meal.component';
import { MealService } from "@nutrition/core-data";
import { LoginComponent } from "@nutrition/ui-login";


const routes: Route[] = [
  {path:'', component: LoginComponent},
  {path: 'meals', component: MealComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}

];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class RoutingModule {}

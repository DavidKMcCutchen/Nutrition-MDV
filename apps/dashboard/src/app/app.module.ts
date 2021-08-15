import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MealComponent } from './meal/meal.component';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailsComponent } from './meal/meal-details/meal-details.component';
import { MaterialModule } from '@nutrition/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@nutrition/core-data';
import { CoreStateModule } from '@nutrition/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, MealComponent, MealListComponent, MealDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyMeal, Meal } from '@nutrition/api-interfaces';
import { MealFacade } from '@nutrition/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'nutrition-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  allMeals$: Observable<Meal[]> = this.mealFacade.allMeals$;
  selectedMeal$: Observable<Meal> = this.mealFacade.selectedMeal$;

  form: FormGroup;

  constructor(
    private mealFacade: MealFacade,
    private formBuilder: FormBuilder
  ) {
    this.mealFacade.mutations$.subscribe((_) => this.resetMeal());
  }

  ngOnInit() {
    this.initForm();
    this.mealFacade.loadMeals();
    this.resetMeal()
  }

  selectMeal(meal: Meal) {
    this.form.patchValue(meal);
    this.mealFacade.selectMeal(meal.id)
  }

  saveMeal(meal: Meal) {
    this.mealFacade.saveMeal(meal);
  }

  deleteMeal(meal: Meal) {
    this.mealFacade.deleteMeal(meal);
  }

  resetMeal() {
    this.form.reset();
    this.selectMeal(emptyMeal)
  }

  cancel() {
    this.resetMeal();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      item: [''],
      calories: ['']
    })
  }
}
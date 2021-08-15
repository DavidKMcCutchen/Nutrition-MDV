import { Injectable } from '@angular/core';
import { Meal } from '@nutrition/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as MealActions from './meal.actions';
import * as fromMeal from './meal.reducer';
import * as MealSelectors from './meal.selectors';

@Injectable({
  providedIn: 'root',
})
export class MealFacade {
  allMeals$ = this.store.pipe(select(MealSelectors.getAllMeals));
  selectedMeal$ = this.store.pipe(select(MealSelectors.getSelectedMeal));
  loaded$ = this.store.pipe(select(MealSelectors.getMealsLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === MealActions.createMeal({} as any).type ||
      action.type === MealActions.deleteMeal({} as any).type ||
      action.type === MealActions.updateMeal({} as any).type
    )
  );

  selectMeal(mealId: string) {
    this.dispatch(MealActions.selectMeal({ mealId }));
  }

  loadMeals() {
    this.dispatch(MealActions.loadMeals());
  }

  loadMeal(mealId: string) {
    this.dispatch(MealActions.loadMeal({ mealId }));
  }

  saveMeal(meal: Meal) {
    meal.id ? this.updateMeal(meal) : this.createMeal(meal);
  }

  createMeal(meal: Meal) {
    this.dispatch(MealActions.createMeal({ meal }));
  }

  updateMeal(meal: Meal) {
    this.dispatch(MealActions.updateMeal({ meal }));
  }

  deleteMeal(meal: Meal) {
    this.dispatch(MealActions.deleteMeal({ meal }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromMeal.MealPartialState>,
    private actions$: ActionsSubject
  ) {}
}
import { ActionReducerMap } from "@ngrx/store";
import * as fromMeal from './meals/meal.reducer';

export interface AppState {
  [fromMeal.MEAL_FEATURE_KEY]: fromMeal.MealState
} 

export const reducers: ActionReducerMap<AppState> = {
  [fromMeal.MEAL_FEATURE_KEY]: fromMeal.mealsReducer
};
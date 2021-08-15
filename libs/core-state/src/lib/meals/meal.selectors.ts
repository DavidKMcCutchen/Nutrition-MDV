import { emptyMeal } from "@nutrition/api-interfaces";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mealAdapter, MealState, MEAL_FEATURE_KEY } from "./meal.reducer";

// Lookup the 'Meal' feature state managed by NgRx

export const getMealState = createFeatureSelector<MealState>(MEAL_FEATURE_KEY);

const { selectAll, selectEntities } = mealAdapter.getSelectors();


export const getMealsLoaded = createSelector(
  getMealState,
  (state: MealState) => state.loaded
)

export const getMealError = createSelector(
  getMealState,
  (state: MealState) => state.error
)

export const getAllMeals = createSelector(
  getMealState,
  (state: MealState) => selectAll(state)
)

export const getMealEntities = createSelector(
  getMealState,
  (state: MealState) => selectEntities(state)
)

export const getSelectedMealId = createSelector(
  getMealState,
  (state: MealState) => state.selectedId
)

export const getSelectedMeal = createSelector(
  getMealEntities,
  getSelectedMealId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyMeal
)
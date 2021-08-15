import { Meal } from "@nutrition/api-interfaces";
import { createAction, props } from "@ngrx/store";

// Select Entity
export const selectMeal = createAction(
  '[Meal] Select Meal',
  props<{ mealId: string }>()
);

// Load All Entities
export const loadMeals = createAction('[Meal] Load Meals');

export const loadMealsSuccess = createAction(
  '[Meal] Load Meals Success',
  props<{ meals: Meal[] }>()
);

export const loadMealsFailure = createAction(
  '[Meal] Load Meals Failure',
  props<{ error: any }>()
);

// Load Single Entity
export const loadMeal = createAction(
  '[Meal] Load Meal',
  props<{ mealId: string }>()
);

export const loadMealSuccess = createAction(
  '[Meal] Load Meal Success',
  props<{ meal: Meal }>()
);

export const loadMealFailure = createAction(
  '[Meal] Load Meal Failure',
  props<{ error: any }>()
);

// Load Update Entity
export const updateMeal = createAction(
  '[Meal] Create Meal',
  props<{ meal: Meal }>()
);
export const updateMealSuccess = createAction(
  '[Meal] Create Meal Success',
  props<{ meal: Meal }>()
);
export const updateMealFailure = createAction(
  '[Meal] Create Meal Failure',
  props<{ error: any }>()
);

// Load Delete Entity
export const deleteMeal = createAction(
  '[Meal] Delete Meal',
  props<{ meal: Meal }>()
);
export const deleteMealSuccess = createAction(
  '[Meal] Delete Meal Success',
  props<{ meal: Meal }>()
);
export const deleteMealFailure = createAction(
  '[Meal] Delete Meal Failure',
  props<{ error: any }>()
);

// Load Create Entity
export const createMeal = createAction(
  '[Meal] Update Meal',
  props<{ meal: Meal }>()
);
export const createMealSuccess = createAction(
  '[Meal] Update Meal Success',
  props<{ meal: Meal }>()
);
export const createMealFailure = createAction(
  '[Meal] Update Meal Failure',
  props<{ error: any }>()
);
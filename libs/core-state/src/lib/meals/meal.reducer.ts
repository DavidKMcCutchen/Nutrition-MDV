import { Meal } from "@nutrition/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as MealActions from './meal.actions';

export const MEAL_FEATURE_KEY = 'meals';

export interface MealState extends EntityState<Meal> {
  selectedId?: string | number; // which Meal record has been selected
  loaded: boolean; // has the Meals list been loaded
  error?: string | null; // last known error (if any)
}

export interface MealPartialState {
  readonly [MEAL_FEATURE_KEY]: MealState;
}

export const mealAdapter: EntityAdapter<Meal> = createEntityAdapter<Meal>();

export const initialMealState: MealState = mealAdapter.getInitialState(
  {
    loaded: false,
  }
);

const onFailure = (state, { error }): MealState => ({ ...state, error });

const onDispatch = (state, action): MealState => ({
  ...state,
  loaded: false,
  error: null,
});

const _mealsReducer = createReducer(
  initialMealState,
  on(
    MealActions.loadMealFailure,
    MealActions.loadMealsFailure,
    MealActions.deleteMealFailure,
    MealActions.updateMealFailure,
    MealActions.createMealFailure,
    onFailure
  ),
  on(
    MealActions.loadMeal,
    MealActions.loadMeals,
    MealActions.deleteMeal,
    MealActions.updateMeal,
    MealActions.createMeal,
    onDispatch
  ),
  on(
    MealActions.loadMealSuccess, (state, { meal }) =>
    mealAdapter.upsertOne(meal, { ...state, loaded: true })
  ),
  on(MealActions.selectMeal, (state, { mealId }) => ({
    ...state,
    selectedId: mealId,
  })),
  on(MealActions.loadMealsSuccess, (state, { meals }) =>
    mealAdapter.setAll(meals, { ...state, loaded: true })
  ),
  on(MealActions.deleteMealSuccess, (state, { meal }) =>
    mealAdapter.removeOne(meal.id, { ...state, loaded: true })
  ),
  on(MealActions.updateMealSuccess, (state, { meal }) =>
    mealAdapter.updateOne(
      { id: meal.id, changes: meal },
      { ...state, loaded: true }
    )
  ),
  on(MealActions.createMealSuccess, (state, { meal }) =>
    mealAdapter.addOne(meal, { ...state, loaded: true })
  )
);

export function mealsReducer(
  state: MealState | undefined,
  action: Action
) {
  return _mealsReducer(state, action);
}
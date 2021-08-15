import { Injectable } from "@angular/core";
import { MealService } from "@nutrition/core-data";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as MealActions from './meal.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { Meal } from "@nutrition/api-interfaces";

@Injectable()
export class MealEffects {
  loadMeal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MealActions.loadMeal),
      fetch({
        run: (action) =>
          this.mealService
            .find(action.mealId)
            .pipe(
              map((meal: Meal) =>
                MealActions.loadMealSuccess({ meal })
              )
            ),
        onError: (action, error) => MealActions.loadMealFailure({ error }),
      })
    )
  );

  loadMeals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MealActions.loadMeals),
      fetch({
        run: () =>
          this.mealService
            .all()
            .pipe(
              map((meals: Meal[]) =>
                MealActions.loadMealsSuccess({ meals })
              )
            ),
        onError: (action, error) => MealActions.loadMealsFailure({ error }),
      })
    )
  );

  updateMeal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MealActions.updateMeal),
      pessimisticUpdate({
        run: (action) =>
          this.mealService
            .update(action.meal)
            .pipe(
              map((meal: Meal) =>
                MealActions.updateMealSuccess({ meal })
              )
            ),
        onError: (action, error) =>
          MealActions.updateMealFailure({ error }),
      })
    )
  );

  deleteMeal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MealActions.deleteMeal),
      pessimisticUpdate({
        run: (action) =>
          this.mealService
            .delete(action.meal)
            .pipe(
              map(() =>
                MealActions.deleteMealSuccess({ meal: action.meal })
              )
            ),
        onError: (action, error) =>
          MealActions.deleteMealFailure({ error }),
      })
    )
  );

  createMeal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MealActions.createMeal),
      pessimisticUpdate({
        run: (action) =>
          this.mealService
            .create(action.meal)
            .pipe(
              map((meal: Meal) =>
                MealActions.createMealSuccess({ meal })
              )
            ),
        onError: (action, error) =>
          MealActions.createMealFailure({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private mealService: MealService
  ) {}
}
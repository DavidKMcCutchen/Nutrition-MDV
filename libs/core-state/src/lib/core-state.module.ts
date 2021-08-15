import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { CoreDataModule } from '@nutrition/core-data';
import { NgModule } from '@angular/core';
import { MealEffects } from './meals/meal.effects';
import { reducers } from '.';


const store_name = 'Meal Store';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([MealEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})
export class CoreStateModule {}
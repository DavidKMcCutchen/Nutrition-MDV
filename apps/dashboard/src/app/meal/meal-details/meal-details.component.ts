import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Meal } from "@nutrition/api-interfaces";

@Component({
  selector: 'nutrition-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent {
  currentMeal: Meal
;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set meal(value) {
    if (value) this.originalTitle = value.item;
    this.currentMeal = { ...value }
  }
  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}

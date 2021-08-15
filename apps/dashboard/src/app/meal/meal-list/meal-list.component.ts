import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Meal } from "@nutrition/api-interfaces";

@Component({
  selector: 'nutrition-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent {
  @Input() meals: Meal[] |  null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Meal } from "@nutrition/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  model = 'meals'

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Meal[]>(this.getUrl());
  }

  find(mealId: string) {
    return this.httpClient.get<Meal>(this.getUrlById(mealId));
  }

  create(meals: Meal) {
    return this.httpClient.post<Meal>(this.getUrl(), meals);
  }

  update(meals: Meal) {
    return this.httpClient.patch<Meal>(this.getUrlById(meals.id), meals);
  }

  delete({ id }: Meal) {
    return this.httpClient.delete<Meal>(this.getUrlById(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}

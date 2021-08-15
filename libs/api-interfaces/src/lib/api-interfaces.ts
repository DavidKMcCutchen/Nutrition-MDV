export interface Meal {
  id: string;
  item: string;
  calories: number;
};

export const emptyMeal = {
  id: '',
  item: '',
  calories: 0
};
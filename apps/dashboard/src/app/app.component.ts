import { Component } from '@angular/core';

@Component({
  selector: 'nutrition-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Meals';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'meals', icon: 'view_list', title: 'Meals'}
  ]
}

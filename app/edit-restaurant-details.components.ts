import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-restaurant-details',
  inputs: ['restaurant'],
  template: `
  <div class="form-group">
    <h3>Edit Restaurant:</h3>
    <input [(ngModel)]="restaurant.name" class="input-lg"/>
    <input [(ngModel)]="restaurant.cuisine" class="input-lg"/>
    <input [(ngModel)]="restaurant.address" class="input-lg"/>
    <input [(ngModel)]="restaurant.cost" class="input-lg"/>
  </div>
  `
})
export class EditRestaurantDetailsComponent {
  public restaurant: Restaurant;
}

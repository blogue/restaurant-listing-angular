import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template:`
  <div class="col-md-12">
    <h3>{{restaurant.name}}</h3>
  </div>
  `
})
export class RestaurantComponent {
  public restaurant: Restaurant;
}

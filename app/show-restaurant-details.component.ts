import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'display-details',
  inputs: ['restaurant'],
  template:`
    <h4> {{restaurant.cuisine}} | {{restaurant.address}} {{restaurant.cost}} </h4>
  `
})
export class ShowDetailsComponent {
  public restaurant: Restaurant;
}

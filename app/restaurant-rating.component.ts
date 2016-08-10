import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';


@Component({
  selector: 'rate-restaurant',
  inputs: ['restaurant'],
  template: `
  <h3>Rate Restaurant</h3>
  <select id="rating" #newRating>
    <option value="1">1 star</option>
    <option value="2">2 stars</option>
    <option value="3">3 stars</option>
    <option value="4">4 stars</option>
    <option value="5">5 stars</option>
  </select>
  <h3>Wait Time:</h3>
  <select id="waitTime" #newWaitTime>
    <option value="1">Short</option>
    <option value="2">Average</option>
    <option value="3">Long</option>
  </select>
  <button (click)="addRating(newRating, newWaitTime)" class="btn-primary btn-lg">Add Rating</button>
  `
})
export class RestaurantRating {
  public restaurant: Restaurant;
  public onSubmitNewRating: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewRating = new EventEmitter();
  }
  addRating(restaurantRating: HTMLSelectElement, restaurantWaitTime: HTMLSelectElement){
    var params: string[] = [restaurantRating.value, restaurantWaitTime.value];
    this.onSubmitNewRating.emit(params);
  }
}

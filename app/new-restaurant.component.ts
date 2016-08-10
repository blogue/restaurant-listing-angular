import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'new-restaurant',
  outputs: ['onSubmitNewRestaurant'],
  template: `
    <div>
      <h3>Add a Restaurant</h3>
      <input placeholder="Name" class="col-sm-12 input-lg" #newName required>
      <input placeholder="Cuisine" class="col-sm-12 input-lg" #newCuisine required>
      <input placeholder="Address" class="col-sm-12 input-lg" #newAddress required>
      <input placeholder="Cost" class="col-sm-12 input-lg" #newCost required>
      <button (click)="addRestaurant(newName, newCuisine, newAddress, newCost)" class="btn-success btn-lg">Add</button>
    </div>
  `
})

export class NewRestaurantComponent {
  public onSubmitNewRestaurant: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewRestaurant = new EventEmitter();
  }
  addRestaurant(restaurantName: HTMLInputElement, restaurantCuisine: HTMLInputElement, restaurantAddress: HTMLInputElement, restaurantCost: HTMLInputElement){
    var model: string[] = [restaurantName.value, restaurantCuisine.value, restaurantAddress.value, restaurantCost.value];
    this.onSubmitNewRestaurant.emit(model);
    restaurantName.value = "";
    restaurantCuisine.value = "";
    restaurantAddress.value = "";
    restaurantCost.value = "";
  }

}

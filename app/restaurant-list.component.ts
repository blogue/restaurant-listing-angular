import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { NewRestaurantComponent } from './new-restaurant.component';
import { ShowDetailsComponent} from './show-restaurant-details.component';
import { EditRestaurantDetailsComponent} from './edit-restaurant-details.components';
import { CuisinePipe } from './cuisine.pipe';
import {RestaurantRating} from './restaurant-rating.component';
import { ShowRatingDetails } from './show-rating-details.component';

@Component({
  selector: 'restaurant-list',
  inputs: ["restaurantList"],
  outputs: ['onRestaurantSelect'],
  pipes: [CuisinePipe],
  directives: [RestaurantComponent, NewRestaurantComponent, ShowDetailsComponent, EditRestaurantDetailsComponent, RestaurantRating, ShowRatingDetails],
  template:`
  <div>
  <select id="selectCuisine" (change)="onChangeCuisine($event.target.value)" class="filter">
    <option value="allCuisines" selected="selected">Show All Cuisines</option>
    <option *ngFor="#restaurant of restaurantList" value="{{restaurant.cuisine}}">{{restaurant.cuisine}}</option>
  </select>
  <display-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></display-details>
  <display-rating *ngIf="selectedRestaurant"
  [restaurant]="selectedRestaurant"></display-rating>
    <restaurant-display *ngFor="#currentRestaurant of restaurantList | cuisine:filterCuisine"
      (click)="restaurantClicked(currentRestaurant)"
      [class.selected]="currentRestaurant === selectedRestaurant"
      [restaurant]="currentRestaurant">

    </restaurant-display>
  </div>
  <edit-restaurant-details *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant"></edit-restaurant-details>
  <div class="container">
    <new-restaurant (onSubmitNewRestaurant)="createRestaurant($event)"></new-restaurant>
  </div>
  <rate-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant">
  </rate-restaurant>


  `
})
export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  public filterCuisine: string = "allCuisines";
  constructor() {
    this.onRestaurantSelect = new EventEmitter();
  }
  restaurantClicked(clickedRestaurant: Restaurant): void {
    this.selectedRestaurant = clickedRestaurant;
    this.onRestaurantSelect.emit(clickedRestaurant);
  }
  createRestaurant(parameters): void {
    this.restaurantList.push(
      new Restaurant(parameters[0], parameters[1], parameters[2], parameters[3])
    );
  }


  onChangeCuisine(filterOption) {
    this.filterCuisine = filterOption;
  }
}

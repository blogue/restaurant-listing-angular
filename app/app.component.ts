import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantListComponent } from './restaurant-list.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div class="container">
      <h1>Restaurant Listing</h1>
      <restaurant-list
        [restaurantList]="restaurants"
        (onRestaurantSelect)="restaurantWasSelected($event)">
      </restaurant-list>
    </div>
  `
})

export class AppComponent {
 public restaurants: Restaurant[];
 constructor(){
   this.restaurants = [
     new Restaurant("Los Gorditos", "Mexican", "2015 SE Division", "Low"),
     new Restaurant("Bambo Sushi", "Japanese", "3004 SW 11th Morrison", "High"),
     new Restaurant("Taco Bell", "Fast Food", "44th NE Powell", "Low")
   ];
 }
 restaurantWasSelected(clickedRestaurant: Restaurant): void {
   console.log(clickedRestaurant);
 }
}

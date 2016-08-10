import { Pipe, PipeTransform } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: "cuisine",
  pure: false
})
export class CuisinePipe implements PipeTransform {
  transform(input: Restaurant[], args) {
    var cuisineType = args[0];
    var restaurants = [];
    for(var i=0; i<input.length; i++){
      if(cuisineType === input[i].cuisine){
        restaurants.push(input[i]);
      } else if (cuisineType === "allCuisines"){
        return input;
      }
    }
    return restaurants;
  }
}

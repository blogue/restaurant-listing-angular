import { Component} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'display-rating',
  inputs: ['restaurant'],
  template:`
    <h4>Rating: {{showRating()}} out of 5</h4>
    <h4>Wait Time: {{showWaitTime()}}</h4>
  `
})
export class ShowRatingDetails {
  public restaurant: Restaurant;
  public total: number = 0;
  public waitTotal: number = 0;
  showRating() {
    this.total = 0;
    if (this.restaurant.rating.length === 0){
      return 0;
    } else {
      for(var i = 0; i < this.restaurant.rating.length; i++){
        this.total += this.restaurant.rating[i];
      }
    }
    return this.total/this.restaurant.rating.length;
  }
  showWaitTime() {
    this.waitTotal = 0;
    if(this.restaurant.waitTime.length ===0){
      return "No Information on Wait Times";
    } else {
      for(var i = 0; i < this.restaurant.waitTime.length; i++){
        this.waitTotal += this.restaurant.waitTime[i];
      }
      var averageWait = this.waitTotal/this.restaurant.waitTime.length;
      if (averageWait === 1){
        return "Short";
      } else if (averageWait === 2){
        return "Average";
      } else {
        return "Long";
      }
    }
  }
}

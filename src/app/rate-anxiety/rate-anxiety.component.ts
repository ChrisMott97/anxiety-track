import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate-anxiety',
  templateUrl: './rate-anxiety.component.html',
  styleUrls: ['./rate-anxiety.component.scss'],
})
export class RateAnxietyComponent {
  defaultRatings = ["😊", "🤨", "😣", "🥴", "😭"]
  ratings = [...this.defaultRatings]
  highlightedRating:number = -1;

  public highlight(index: number){
    if(this.highlightedRating === index){
      console.log("Processing...")
    }
    this.ratings = [...this.defaultRatings];
    this.ratings[index] = "✅";
    this.highlightedRating = index;
  }

  public clear(){
    this.ratings = [...this.defaultRatings];
    this.highlightedRating = -1;
  }
}

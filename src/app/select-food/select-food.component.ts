import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.component.html',
  styleUrls: ['./select-food.component.scss'],
})
export class SelectFoodComponent {
  foods = [
    'Apple',
    'Pear',
    'Pasta',
    'Rice',
    'Broccoli',
    'Cabbage',
    'Carrot',
    'Blueberry',
    'Custard',
  ];
  selected:string[] = [];

  public select(index:number){
    this.selected = [...this.selected, this.foods[index]]
    this.foods.splice(index, 1);
  }

  public unselect(index:number){
    this.foods = [...this.foods, this.selected[index]]
    this.selected.splice(index, 1);
  }
}

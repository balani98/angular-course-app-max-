import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})

export class RecipeItemComponent implements OnInit {
 
  constructor() { }
  @Input() recipe: Recipe;
  @Output() 
  recipeSelected = new EventEmitter<void>(); 
  ngOnInit(): void {
  }
  selectRecipe(){
    this.recipeSelected.emit();


  }

}

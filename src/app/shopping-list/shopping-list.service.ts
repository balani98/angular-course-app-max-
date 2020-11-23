import { EventEmitter, Inject, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
        private ingredients :Ingredient[] =[
        new Ingredient('apples',5),
        new Ingredient('Oranges',9),
        new Ingredient('Mangoes',10)
      ];
   getIngredients(){
     return this.ingredients.slice();


   }
   addIngredient(ingredient:Ingredient){
     this.ingredients.push(ingredient);
     this.ingredientsChanged.emit(this.ingredients.slice());
   }
   addIngredients(ingredients:Ingredient[]){
    // for(let ingredient of ingredients){
    //     this.addIngredient(ingredient);
    // }
    // we are not using above code because it pushes the object by object but we want al objects to be pushed in one go
     // this is spread operator used 
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
   }

    
}
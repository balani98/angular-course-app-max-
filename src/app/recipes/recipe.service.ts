import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService{
  recipeSelected=new EventEmitter<Recipe>();

  //recipes are declared private because we do not want other classes to access it publicly
    private recipes:Recipe[]=[
        new Recipe('chole Bhature',
        'maida gundo,tayi me ghee daalo,fir eno daalo',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQn6D1bPr8KiiIzDVk9wCt2JgqBng6tPDF3bA&usqp=CAU'
        ,[
           new Ingredient('Meat',1),
           new Ingredient('apple',2),
           new Ingredient('French fries',3)
        ]),
        new Recipe('Tikki',
        'maida gundo,tayi me ghee daalo,fir eno daalo',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQn6D1bPr8KiiIzDVk9wCt2JgqBng6tPDF3bA&usqp=CAU'
        ,[
           new Ingredient('Meat',1),
           new Ingredient('apple',2),
           new Ingredient('French fries',3)

        ])
    
       ]
       constructor(private shoppingListService:ShoppingListService){}
       // this function actually returns the copy of all recipes withot changing any part
   getRecipes(){
      return this.recipes.slice();
   }
   getRecipe(index:number){
      return this.recipes.slice()[index];
      }
   addIngredientsToShoppingList(ingredients:Ingredient[]){

   this.shoppingListService.addIngredients(ingredients);
   }



}
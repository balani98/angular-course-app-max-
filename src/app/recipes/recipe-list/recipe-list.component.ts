import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
   recipes:Recipe[]=[
    new Recipe('chole Bhature','maida gundo,tayi me ghee daalo,fir eno daalo',
    'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/06/chole-bhature-recipe31.jpg')

   ]
  ngOnInit(): void {
  }

}

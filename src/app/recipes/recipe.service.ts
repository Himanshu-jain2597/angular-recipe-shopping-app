import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingeridents.model';
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe(
      'Burger',
      'to make a burger',
      'https://images.pexels.com/photos/4737039/pexels-photo-4737039.jpeg?cs=srgb&dl=pexels-adriano-brodbeck-4737039.jpg&fm=jpg',
      [
        new Ingredient('meat',10),
        new Ingredient('sabzi',20)
      ]),
    new Recipe('Pizza',
    'to make pizza',
    'https://images.pexels.com/photos/4737039/pexels-photo-4737039.jpeg?cs=srgb&dl=pexels-adriano-brodbeck-4737039.jpg&fm=jpg',
    [
      new Ingredient('alloo',10),
      new Ingredient('bangan',20)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number) {
    return this.recipes[index];
}

}

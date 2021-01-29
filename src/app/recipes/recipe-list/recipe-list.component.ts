import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected =  new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A test recipe','This is simply a test','https://images.pexels.com/photos/4737039/pexels-photo-4737039.jpeg?cs=srgb&dl=pexels-adriano-brodbeck-4737039.jpg&fm=jpg'),
    new Recipe('A test recipe','This is simply a test','https://images.pexels.com/photos/4737039/pexels-photo-4737039.jpeg?cs=srgb&dl=pexels-adriano-brodbeck-4737039.jpg&fm=jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe) {

    this.recipeWasSelected.emit(recipe);
  }

}

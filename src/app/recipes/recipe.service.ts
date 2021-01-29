import { Recipe } from "./recipe.model";

export class RecipeService {

  recipes:Recipe[] = [
    new Recipe('A test recipe','This is simply a test','https://images.pexels.com/photos/4737039/pexels-photo-4737039.jpeg?cs=srgb&dl=pexels-adriano-brodbeck-4737039.jpg&fm=jpg'),
    new Recipe('A test recipe','This is simply a test','https://images.pexels.com/photos/4737039/pexels-photo-4737039.jpeg?cs=srgb&dl=pexels-adriano-brodbeck-4737039.jpg&fm=jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

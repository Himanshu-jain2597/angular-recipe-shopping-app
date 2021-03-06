import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {

  // @Input()
  recipe:Recipe;
  id:number;
  constructor(private recipeService:RecipeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params:Params)=> {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    })

  }

}

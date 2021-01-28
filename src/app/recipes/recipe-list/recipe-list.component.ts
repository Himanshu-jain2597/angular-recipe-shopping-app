import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A test recipe','This is simply a test','https://images.app.goo.gl/5Az1Ko39v8idegV5A')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

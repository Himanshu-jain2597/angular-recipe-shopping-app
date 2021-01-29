import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }

  @Input() recipe
  //@Output() recipeSelected =  new EventEmitter<void>();
  ngOnInit(): void {
  }

  onSelected() {

    this.recipeService.recipeSelected.emit(this.recipe);

  }
}

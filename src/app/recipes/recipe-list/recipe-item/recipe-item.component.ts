import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  @Input() recipe
  @Output() recipeSelected =  new EventEmitter<void>();
  ngOnInit(): void {
  }

  onSelected() {

    this.recipeSelected.emit();

  }
}

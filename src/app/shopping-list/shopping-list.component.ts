import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingeridents.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
    ingeridents:Ingredient[];
  // ingeridents:Ingredient[]=[
  //   new Ingredient('apples',5),
  //   new Ingredient('mongoes',10)
  // ];

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingeridents= this.slService.getIngeridents();
    this.slService.ingeridentsChanged.subscribe((ingeridents:Ingredient[])=> {
      this.ingeridents=ingeridents;
    })
  }

  // oningeridentAdded(ingeridents:Ingredient) {
  //   this.ingeridents.push(ingeridents);
  // }

}

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingeridents.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingeridents:Ingredient[]=[
    new Ingredient('apples',5),
    new Ingredient('mongoes',10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

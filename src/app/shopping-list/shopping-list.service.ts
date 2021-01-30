import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingeridents.model';

export class ShoppingListService {
  ingeridentsChanged = new EventEmitter<Ingredient[]>();

  private ingeridents:Ingredient[]=[
    new Ingredient('apples',5),
    new Ingredient('mongoes',10)
  ];

  getIngeridents() {
    return this.ingeridents.slice();
  }

  addIngerident(ingerident:Ingredient) {
    this.ingeridents.push(ingerident);
    this.ingeridentsChanged.emit(this.ingeridents.slice())
  }

}

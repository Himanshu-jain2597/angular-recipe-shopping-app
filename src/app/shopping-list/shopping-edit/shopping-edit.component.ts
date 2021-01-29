import { Component, OnInit,ElementRef, ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingeridents.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() ingeridentAdded = new EventEmitter< {name:string,amount:number} >();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {

    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ing = new Ingredient(ingName,ingAmount);
    this.ingeridentAdded.emit(ing);

  }

}

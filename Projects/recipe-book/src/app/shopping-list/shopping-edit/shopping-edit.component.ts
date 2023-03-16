import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Component, ElementRef, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addedIngredient = new EventEmitter<{name: string, amount: number}>();

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.addedIngredient.emit(newIngredient);
  }
}

import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Drink} from "../../model/drink";



@Component({
  selector: 'app-drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.css']
})
export class DrinkFormComponent {

  @Input() drink: Drink;

  @ViewChild('drinkForm', { static: false}) drinkForm!: NgForm;

  @Input() editMode = false;

  @Output() drinkAdded = new EventEmitter<Drink>();

  @Output() drinkUpdated = new EventEmitter<Drink>();

  @Output() editCanceled = new EventEmitter();

  constructor() {
    this.drink = {} as Drink;
  }
  private resetEditState() {
    this.editMode = false;
    this.drinkForm.resetForm();
    this.drink = {} as Drink;
  }
  // Event Handlers

  onSubmit() {
    if (this.drinkForm.form.valid) {
      if (this.editMode) {
        this.drinkUpdated.emit(this.drink);
      } else {
        this.drinkAdded.emit(this.drink);
      }
      this.resetEditState();
    } else {
      console.log('Invalid data');
    }
  }

  onCancel() {
    this.resetEditState();
    this.editCanceled.emit();
  }
}

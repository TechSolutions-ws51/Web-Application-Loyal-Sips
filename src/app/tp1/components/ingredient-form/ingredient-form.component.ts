import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../model/ingredient";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {

  // Attributes

  @Input() student: Ingredient;

  @ViewChild('studentForm', { static: false}) studentForm!: NgForm;

  @Input() editMode = false;

  @Output() studentAdded = new EventEmitter<Ingredient>();

  @Output() studentUpdated = new EventEmitter<Ingredient>();

  @Output() editCanceled = new EventEmitter();

  // Constructor
  constructor() {
    this.student = {} as Ingredient;
  }

  // Private methods

  private resetEditState() {
    this.editMode = false;
    this.studentForm.resetForm();
    this.student = {} as Ingredient;
  }
  // Event Handlers

  onSubmit() {
    if (this.studentForm.form.valid) {
      if (this.editMode) {
        this.studentUpdated.emit(this.student);
      } else {
        this.studentAdded.emit(this.student);
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

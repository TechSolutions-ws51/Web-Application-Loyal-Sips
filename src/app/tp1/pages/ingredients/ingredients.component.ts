import {Component, OnInit, ViewChild} from '@angular/core';
import {IngredientsService} from "../../services/ingredients.service";
import {Ingredient} from "../../model/ingredient";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-students',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  // Attributes

  studentData: Ingredient;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'address', 'actions'];

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  isEditMode = false;


  constructor(private studentsService: IngredientsService) {
    this.studentData = {} as Ingredient;
    this.dataSource = new MatTableDataSource<any>();
  }

  //#beginregion Private methods

  private resetEditState() {
    this.isEditMode = false;
    this.studentData = {} as Ingredient;
  }

  //#endregion

  // CRUD Actions

  private getAllStudents() {
    this.studentsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  private addStudent() {
    this.studentData.id = 0;
    this.studentsService.create(this.studentData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((s: Ingredient) => {
        return s;
      });
    });
  }

  private updateStudent() {
    let student = this.studentData;
    this.studentsService.update(student.id, student).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((s: Ingredient) => {
        if (s.id === response.id) {
          s = response;
        }
        return s;
      });
    });
  }

  private deleteStudent(id: number) {
    this.studentsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((s: Ingredient) => {
        return s.id !== id ? s : false
      });
    });
  }

  // Event Handlers

  onEditItem(element: Ingredient) {
    this.studentData = element;
    this.isEditMode = true;
  }

  onCancelEdit() {
    this.isEditMode = false;
    this.getAllStudents();
  }

  onDeleteItem(element: Ingredient) {
    this.deleteStudent(element.id);
  }

  onStudentAdded(student: Ingredient) {
    this.studentData = student;
    this.addStudent();
    this.resetEditState();
  }

  onStudentUpdated(student: Ingredient) {
    this.studentData = student;
    this.updateStudent();
    this.resetEditState();
  }

  // Lifecycle Hooks

  ngOnInit(): void {
    this.getAllStudents();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

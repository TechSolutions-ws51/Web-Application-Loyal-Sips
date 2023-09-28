import {Component, OnInit, ViewChild} from '@angular/core';
import {DrinksService} from "../../services/drinks.service";
import {Drink} from "../../model/drink";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-customers',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit{

  drinkData: Drink;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name','address','image'];

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  isEditMode = false;

  constructor(private drinksService: DrinksService) {
    this.drinkData = {} as Drink;
    this.dataSource = new MatTableDataSource<any>();
  }
  private resetEditState() {
    this.isEditMode = false;
    this.drinkData = {} as Drink;
  }
  private getAllDrinks() {
    this.drinksService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  private addDrink() {
    this.drinkData.id = 0;
    this.drinksService.create(this.drinkData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((s: Drink) => {
        return s;
      });
    });
  }

  private updateDrink() {
    let drink = this.drinkData;
    this.drinksService.update(drink.id, drink).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((s: Drink) => {
        if (s.id === response.id) {
          s = response;
        }
        return s;
      });
    });
  }

  private deleteDrink(id: number) {
    this.drinksService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((s: Drink) => {
        return s.id !== id ? s : false
      });
    });
  }

  onEditItem(element: Drink) {
    this.drinkData = element;
    this.isEditMode = true;
  }

  onCancelEdit() {
    this.isEditMode = false;
    this.getAllDrinks();
  }

  onDeleteItem(element: Drink) {
    this.deleteDrink(element.id);
  }

  onDrinkAdded(drink: Drink) {
    this.drinkData = drink;
    this.addDrink();
    this.resetEditState();
  }

  onDrinkUpdated(drink: Drink) {
    this.drinkData = drink;
    this.updateDrink();
    this.resetEditState();
  }

  // Lifecycle Hooks

  ngOnInit(): void {
    this.getAllDrinks();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  protected readonly Drink = Drink;
}

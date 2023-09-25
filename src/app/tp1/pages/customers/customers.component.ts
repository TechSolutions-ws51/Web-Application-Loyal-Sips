import { Component } from '@angular/core';
import {CustomerService} from "../../services/customer.service";


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  constructor(private customerService: CustomerService) {
    this.customerService.getAll().subscribe((response: any) => {
      console.log(response);
    })
  }

}

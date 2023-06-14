import { CustomersService } from './../services/customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers;
  constructor(private customersServices: CustomersService) {
    this.customersServices.getUser().subscribe(customer => {
      // this.customers = JSON.stringify(customer);
      // console.log(this.customers);
      this.customers = Object.keys(customer).map(key => ({ID: key, value: customer[key]}));
      console.log(this.customers);
    });

    // const mapped = Object.keys(this.customers).map(key => ({type: key, value: this.customers[key]}));
   }

  ngOnInit() {
  }

}

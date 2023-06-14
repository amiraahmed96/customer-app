import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  customers;
  constructor(private customersServices: CustomersService) {
    this.customersServices.getUser().subscribe(customer => {
      this.customers = Object.keys(customer).map(key => ({ID: key, value: customer[key]}));
      console.log(this.customers);
    });
   }

  ngOnInit() {
  }

}

import { CustomersService } from './../services/customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  constructor(private customersServices: CustomersService) { }

  ngOnInit() {
  }

  saveCustomer(fname, lname, address, city, state) {
    this.customersServices.AddUser(fname, lname, address, city, state);
  }

  preview(files) {
    if (files.length === 0) { return; }


    // tslint:disable-next-line:prefer-const
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    // tslint:disable-next-line:prefer-const
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

}

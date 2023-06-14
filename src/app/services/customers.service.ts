import { Customer } from './../data/customers';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  allUser;
  public firebase;
  constructor(private db: AngularFireDatabase, private router: Router) {
    this.firebase = this.db.list('/customer');
  }

  getUser() {
    return this.db.object('customer').valueChanges();
  }

  // Create User
  AddUser(firstName, LastName, City, State, address) {
    this.firebase.push({
      FirstName: firstName,
      lastName: LastName,
      city: City,
      state: State,
      address: address,
    });
    // this.db.object('customer').set({
    //   FirstName: firstName,
    //   lastName: LastName,
    //   city: City,
    //   state: State,
    //   address: address
    // });
  }
}

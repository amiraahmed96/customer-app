import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public colapsed = false;
  constructor() { }

  ngOnInit() {
  }
  navbarToggle() {
    this.colapsed = !this.colapsed;
  }

}

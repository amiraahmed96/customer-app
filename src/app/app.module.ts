import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { environment } from 'src/environments/environment';
import { CustomerDashComponent } from './customer-dash/customer-dash.component';
import { CustomerNavComponent } from './customer-nav/customer-nav.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerListComponent,
    NewCustomerComponent,
    CustomerDashComponent,
    CustomerNavComponent,
    CustomerCardComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CustomFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

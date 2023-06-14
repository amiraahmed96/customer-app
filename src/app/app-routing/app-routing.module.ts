import { NewCustomerComponent } from './../new-customer/new-customer.component';
import { CustomerListComponent } from './../customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashComponent } from '../customer-dash/customer-dash.component';
import { CustomerCardComponent } from '../customer-card/customer-card.component';

const routes: Routes = [
    {
        path: '',
        component: CustomerDashComponent, children: [
          {path: '', component: CustomerCardComponent},
          {path: 'list', component: CustomerListComponent},
          {path: 'add', component: NewCustomerComponent}
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }

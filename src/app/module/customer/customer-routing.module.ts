import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from 'src/app/page/customer/customer.component';
import { ModifyCustomerComponent } from 'src/app/page/modify-customer/modify-customer.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'customer/add',
    component: ModifyCustomerComponent,
  },
  {
    path: 'customer/edit',
    component: ModifyCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}

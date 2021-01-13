import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from 'src/app/page/customer/customer.component';
import { ModifyCustomerComponent } from 'src/app/page/modify-customer/modify-customer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent, ModifyCustomerComponent],
  imports: [CommonModule, CustomerRoutingModule, FormsModule],
})
export class CustomerModule {}

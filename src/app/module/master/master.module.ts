import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BookModule } from '../book/book.module';
import { CustomerModule } from '../customer/customer.module';
import { UserModule } from '../user/user.module';
import { RoleModule } from '../role/role.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BookModule,
    CustomerModule,
    UserModule,
    RoleModule,
  ],
})
export class MasterModule {}

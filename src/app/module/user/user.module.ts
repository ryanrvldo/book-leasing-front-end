import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ModifyUserComponent } from 'src/app/page/modify-user/modify-user.component';
import { UserComponent } from 'src/app/page/user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, ModifyUserComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}

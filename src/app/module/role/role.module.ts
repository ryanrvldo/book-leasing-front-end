import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { ModifyRoleComponent } from 'src/app/page/modify-role/modify-role.component';
import { RoleComponent } from 'src/app/page/role/role.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoleComponent, ModifyRoleComponent],
  imports: [CommonModule, RoleRoutingModule, FormsModule],
})
export class RoleModule {}

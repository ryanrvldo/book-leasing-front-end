import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifyRoleComponent } from 'src/app/page/modify-role/modify-role.component';
import { RoleComponent } from 'src/app/page/role/role.component';

const routes: Routes = [
  {
    path: 'role',
    component: RoleComponent,
  },
  {
    path: 'role/add',
    component: ModifyRoleComponent,
  },
  {
    path: 'role/edit',
    component: ModifyRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {}

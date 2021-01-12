import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/layout/admin/admin.component';
import { BookComponent } from 'src/app/page/book/book.component';
import { CustomerComponent } from 'src/app/page/customer/customer.component';
import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';
import { ModifyBookComponent } from 'src/app/page/modify-book/modify-book.component';
import { ModifyCustomerComponent } from 'src/app/page/modify-customer/modify-customer.component';
import { ModifyRoleComponent } from 'src/app/page/modify-role/modify-role.component';
import { ModifyUserComponent } from 'src/app/page/modify-user/modify-user.component';
import { RoleComponent } from 'src/app/page/role/role.component';
import { UserComponent } from 'src/app/page/user/user.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'book/add',
    component: ModifyBookComponent,
  },
  {
    path: 'book/edit',
    component: ModifyBookComponent,
  },
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
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/add',
    component: ModifyUserComponent,
  },
  {
    path: 'user/edit',
    component: ModifyUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}

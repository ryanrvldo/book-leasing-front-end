import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifyUserComponent } from 'src/app/page/modify-user/modify-user.component';
import { UserComponent } from 'src/app/page/user/user.component';

const routes: Routes = [
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
export class UserRoutingModule {}

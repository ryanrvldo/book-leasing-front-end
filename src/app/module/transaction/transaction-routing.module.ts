import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionReturnComponent } from 'src/app/page/transaction-return/transaction-return.component';
import { TransactionReturnAddComponent } from 'src/app/page/transaction-return-add/transaction-return-add.component';
import { TransactionRentalComponent } from 'src/app/page/transaction-rental/transaction-rental.component';
import { TransactionRentalAddComponent } from 'src/app/page/transaction-rental-add/transaction-rental-add.component';
import { TransactionRentalDetailComponent } from 'src/app/page/transaction-rental-detail/transaction-rental-detail.component';

const routes: Routes = [
  {
    path: 'rental',
    component: TransactionRentalComponent,
  },
  {
    path: 'rental/detail/:receipt',
    component: TransactionRentalDetailComponent,
  },
  {
    path: 'rental/add',
    component: TransactionRentalAddComponent,
  },
  {
    path: 'return',
    component: TransactionReturnComponent,
  },
  {
    path: 'return/add',
    component: TransactionReturnAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}

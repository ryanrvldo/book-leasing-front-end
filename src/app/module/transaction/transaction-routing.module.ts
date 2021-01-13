import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTransactionComponent } from 'src/app/page/add-transaction/add-transaction.component';
import { DetailTransactionComponent } from 'src/app/page/detail-transaction/detail-transaction.component';
import { ReturnTransactionComponent } from 'src/app/page/return-transaction/return-transaction.component';
import { TransactionComponent } from 'src/app/page/transaction/transaction.component';

const routes: Routes = [
  {
    path: 'rental',
    component: TransactionComponent,
  },
  {
    path: 'rental/detail',
    component: DetailTransactionComponent,
  },
  {
    path: 'rental/add',
    component: AddTransactionComponent,
  },
  {
    path: 'return',
    component: ReturnTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}

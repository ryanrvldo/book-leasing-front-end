import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTransactionComponent } from 'src/app/page/add-transaction/add-transaction.component';
import { DetailTransactionComponent } from 'src/app/page/detail-transaction/detail-transaction.component';
import { TransactionComponent } from 'src/app/page/transaction/transaction.component';

const routes: Routes = [
  {
    path: 'transaction',
    component: TransactionComponent,
  },
  {
    path: 'transaction/detail',
    component: DetailTransactionComponent,
  },
  {
    path: 'transaction/add',
    component: AddTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}

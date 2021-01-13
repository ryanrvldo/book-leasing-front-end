import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransactionRoutingModule } from './transaction-routing.module';
import { AddTransactionComponent } from 'src/app/page/add-transaction/add-transaction.component';
import { TransactionComponent } from 'src/app/page/transaction/transaction.component';
import { DetailTransactionComponent } from 'src/app/page/detail-transaction/detail-transaction.component';
import { ReturnTransactionComponent } from '../../page/return-transaction/return-transaction.component';

@NgModule({
  declarations: [
    TransactionComponent,
    DetailTransactionComponent,
    AddTransactionComponent,
    ReturnTransactionComponent,
  ],
  imports: [CommonModule, TransactionRoutingModule, FormsModule],
})
export class TransactionModule {}

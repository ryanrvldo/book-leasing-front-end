import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionRentalComponent } from 'src/app/page/transaction-rental/transaction-rental.component';
import { TransactionReturnComponent } from '../../page/transaction-return/transaction-return.component';
import { TransactionReturnAddComponent } from '../../page/transaction-return-add/transaction-return-add.component';
import { TransactionRentalAddComponent } from 'src/app/page/transaction-rental-add/transaction-rental-add.component';
import { TransactionRentalDetailComponent } from 'src/app/page/transaction-rental-detail/transaction-rental-detail.component';

@NgModule({
  declarations: [
    TransactionRentalComponent,
    TransactionRentalDetailComponent,
    TransactionRentalAddComponent,
    TransactionReturnComponent,
    TransactionReturnAddComponent,
  ],
  imports: [CommonModule, TransactionRoutingModule, FormsModule],
})
export class TransactionModule {}

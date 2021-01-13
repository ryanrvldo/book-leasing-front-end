import { Component, OnInit } from '@angular/core';
import { HeaderRental } from 'src/app/model/header-rental';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  constructor(private transactionService: TransactionService) {}

  headers: HeaderRental[];

  ngOnInit(): void {
    this.transactionService.getAllRental().subscribe((value) => {
      this.headers = value.result;
    });
  }
}

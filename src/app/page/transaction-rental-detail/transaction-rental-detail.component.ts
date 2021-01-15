import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from 'src/app/data/data-source';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction-rental-detail',
  templateUrl: './transaction-rental-detail.component.html',
  styleUrls: ['./transaction-rental-detail.component.css'],
})
export class TransactionRentalDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  result: any;

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.getDetails(param.receipt);
    });
  }

  private getDetails(receipt: string) {
    const titlePage = document.querySelector('#titlePage');
    titlePage!!.innerHTML = `Transaction #${receipt}`;
    this.transactionService.getRentalDetails(receipt).subscribe((value) => {
      this.result = value.result;
    });
  }
}

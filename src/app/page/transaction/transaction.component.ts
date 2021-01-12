import { Component, OnInit } from '@angular/core';
import { HeaderRental } from 'src/app/model/header-rental';
import { AuthService } from 'src/app/service/auth.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  constructor(
    private transactionService: TransactionService,
    private authService: AuthService
  ) {}

  headers: HeaderRental[];

  ngOnInit(): void {
    this.transactionService.getAllRental().subscribe((value) => {
      this.headers = value.result;
      console.log(this.authService.getUser());
    });
  }
}

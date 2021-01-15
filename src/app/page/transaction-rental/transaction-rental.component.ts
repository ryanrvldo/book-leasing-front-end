import { Component, OnInit } from '@angular/core';
import { HeaderRental } from 'src/app/model/header-rental';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction-rental',
  templateUrl: './transaction-rental.component.html',
  styleUrls: ['./transaction-rental.component.css'],
})
export class TransactionRentalComponent implements OnInit {
  constructor(
    private transactionService: TransactionService,
    private authService: AuthService
  ) {}

  user: User;
  headers: HeaderRental[];

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.getAllTransaction();
  }

  async getAllTransaction() {
    this.headers = await this.transactionService
      .getAllRentalTransaction()
      .then((value) => {
        return value.result;
      });
  }
}

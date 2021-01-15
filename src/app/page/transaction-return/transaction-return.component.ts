import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction-return',
  templateUrl: './transaction-return.component.html',
  styleUrls: ['./transaction-return.component.css'],
})
export class TransactionReturnComponent implements OnInit {
  constructor(
    private transactionService: TransactionService,
    private authService: AuthService
  ) {}

  user: User;
  returns: any[] = [];

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.getAllTransaction();
  }

  async getAllTransaction() {
    this.returns = await this.transactionService
      .getAllReturnTransaction()
      .then((response) => {
        return response.result;
      });
  }
}

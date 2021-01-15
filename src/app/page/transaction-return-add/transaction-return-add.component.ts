import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnRequest } from 'src/app/model/return-request';
import { TransactionDetailResponse } from 'src/app/model/transaction-detail-response';
import { TransactionResponse } from 'src/app/model/transaction-response';
import { AuthService } from 'src/app/service/auth.service';
import { ToastService } from 'src/app/service/toast.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction-return-add',
  templateUrl: './transaction-return-add.component.html',
  styleUrls: ['./transaction-return-add.component.css'],
})
export class TransactionReturnAddComponent implements OnInit {
  constructor(
    private toastService: ToastService,
    private router: Router,
    private transactionService: TransactionService,
    private authService: AuthService
  ) {}

  receiptNumber: string;
  result: TransactionResponse;
  selectedItem: number;

  carts: TransactionDetailResponse[] = [];

  ngOnInit(): void {}

  checkBorrowedBooks(): void {
    if (!this.receiptNumber || this.receiptNumber.trim().length === 0) {
      this.showErrorToast('Please input your receipt number.');
      return;
    }
    this.transactionService.getRentalDetails(this.receiptNumber).subscribe(
      (value) => {
        this.result = value.result;
        console.log(this.result);
      },
      (error: HttpErrorResponse) => {
        this.showErrorToast(error.error.result);
      }
    );
  }

  addCartItem() {
    const detailResponse = this.result.detailItems.find(
      (item) => item.id == this.selectedItem
    );
    const selectedIndex = this.carts.findIndex(
      (cart) => cart.id == detailResponse.id
    );
    if (selectedIndex !== -1) {
      this.carts.splice(selectedIndex, 1);
    }

    this.carts.push(detailResponse);
    console.log(this.carts);
  }

  removeCartItem(index: number) {
    this.carts.splice(index, 1);
  }

  submitTransaction() {
    const requestArr: ReturnRequest[] = [];
    this.carts.forEach((cart) => {
      const request = new ReturnRequest();
      request.user = this.authService.getUser();
      request.detailId = cart.id;
      request.totalPrice = cart.totalCost;
      requestArr.push(request);
    });

    this.transactionService.addReturnTransaction(requestArr).subscribe(
      (value) => {
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Transaction Success',
          detail: value.result,
        });
        this.router.navigateByUrl('/return');
      },
      (error) => {
        this.showErrorToast(error.error.result);
      }
    );
  }

  showErrorToast(message: string): void {
    this.toastService.emitMessage({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }
}

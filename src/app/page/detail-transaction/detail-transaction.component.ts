import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.css'],
})
export class DetailTransactionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setDetailForm();
  }

  private setDetailForm(): void {
    const transcationDetails = DataSource.getTransactionDetail();
    const titlePage = document.querySelector('#titlePage');
    titlePage!!.innerHTML = `Transaction #${transcationDetails.receiptNumber}`;

    const detailForm = document.querySelector('form#detailTransaction');
    if (!detailForm) {
      console.error('There is no detail form element.');
      return;
    }

    transcationDetails.detailItems.forEach((item) => {
      detailForm.innerHTML += /* html */ `
      <div class="form-group row">
        <label for="book" class="col-sm-2 col-form-label">Book Title</label>
        <div class="col-sm-10">
            <input type="number" class="form-control" id="book" placeholder="${item.book.title}" readonly>
        </div>
      </div>
      <div class="form-group row">
        <label for="book" class="col-sm-2 col-form-label">Book ISBN</label>
        <div class="col-sm-10">
            <input type="number" class="form-control" id="book" placeholder="${item.book.isbn}" readonly>
        </div>
      </div>
      <div class="form-group row">
        <label for="rentalDate" class="col-sm-2 col-form-label">Rental Date</label>
        <div class="col-sm-10">
          <input type="datetime" class="form-control" id="rentalDate" placeholder="${item.rentalDate}" readonly>
        </div>
      </div>
      <div class="form-group row mb-5">
        <label for="returnDate" class="col-sm-2 col-form-label">Return Date</label>
        <div class="col-sm-10">
          <input type="datetime" class="form-control" id="returnDate" placeholder="${item.returnDate}" readonly>
        </div>
      </div>`;
    });

    detailForm.innerHTML += /* html */ `
    <h5>Customer</h5>
    <div class="form-group row">
      <label for="fullName" class="col-sm-2 col-form-label">Full Name</label>
      <div class="col-sm-10">
          <input type="text" class="form-control" id="fullName" placeholder="${transcationDetails.customer.fullName}" readonly>
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="${transcationDetails.customer.email}" readonly>
      </div>
    </div>
    <div class="form-group row">
      <label for="phone" class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
          <input type="text" class="form-control" id="phone" placeholder="${transcationDetails.customer.phone}" readonly>
      </div>
    </div>
    <div class="form-group row">
      <label for="address" class="col-sm-2 col-form-label">Address</label>
      <div class="col-sm-10">
          <textarea type="text" class="form-control" id="address" placeholder="${transcationDetails.customer.address}" readonly></textarea>
      </div>
    </div>`;

    detailForm.innerHTML += /* html */ `
    <h5>User</h5>
    <div class="form-group row">
      <label for="username" class="col-sm-2 col-form-label">Username</label>
      <div class="col-sm-10">
          <input type="text" class="form-control" id="username" placeholder="${transcationDetails.user.username}" readonly>
      </div>
    </div>
    <div class="form-group row">
      <label for="roleName" class="col-sm-2 col-form-label">Role</label>
      <div class="col-sm-10">
          <input type="text" class="form-control" id="roleName" placeholder="${transcationDetails.user.role.name}" readonly>
      </div>`;
  }
}

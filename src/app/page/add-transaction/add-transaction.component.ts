import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
})
export class AddTransactionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const btnAddBook = document.querySelector('button#btnAddBook');
    if (!btnAddBook) return;

    btnAddBook.addEventListener('click', () => {
      const transactionForm = document.querySelector('form#transactionForm');
      if (!transactionForm) return;

      const chooseBookElement = document.createElement('div');
      chooseBookElement.classList.add('form-group', 'row');
      chooseBookElement.innerHTML = /* html */ `
      <label for="bookSelect" class="col-sm-2 col-form-label">Book</label>
      <div class="col-sm-10">
          <select class="form-control" id="bookSelect">
              <option selected disabled value="">Choose Book</option>
          </select>
      </div>`;

      const rentalDaysElement = document.createElement('div');
      rentalDaysElement.classList.add('form-group', 'row');
      rentalDaysElement.innerHTML = /* html */ `
      <label for="rentalDays" class="col-sm-2 col-form-label">Rental Days</label>
      <div class="col-sm-10">
          <input type="number" class="form-control" id="rentalDays">
      </div>`;

      transactionForm.insertBefore(
        chooseBookElement,
        transactionForm.childNodes[2]
      );
      transactionForm.insertBefore(
        rentalDaysElement,
        transactionForm.childNodes[3]
      );
    });
  }
}

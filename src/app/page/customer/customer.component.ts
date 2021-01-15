import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customers: Customer[];

  ngOnInit(): void {
    this.setCustomerList();
  }

  private async setCustomerList() {
    const result = await this.customerService
      .getAllCustomer()
      .then((response) => response.result);
    this.customers = result;
  }
}

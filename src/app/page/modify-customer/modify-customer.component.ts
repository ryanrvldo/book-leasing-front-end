import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';
import { Customer } from 'src/app/model/customer';
import { Profile } from 'src/app/model/profile';
import { CustomerService } from 'src/app/service/customer.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-modify-customer',
  templateUrl: './modify-customer.component.html',
  styleUrls: ['./modify-customer.component.css'],
})
export class ModifyCustomerComponent implements OnInit {
  constructor(
    private toastService: ToastService,
    private customerService: CustomerService
  ) {}

  profile = new Profile();

  ngOnInit(): void {}

  async addCustomer() {
    console.log(this.profile);
    const response = await this.customerService.addNewCustomer(this.profile);
    if (response.code === 201) {
      this.toastService.emitMessage({
        severity: 'success',
        summary: 'Added',
        detail: response.result,
      });
      console.log(response);
    } else {
      this.toastService.emitMessage({
        severity: 'error',
        summary: 'Failed',
        detail: response.result,
      });
    }
  }
}

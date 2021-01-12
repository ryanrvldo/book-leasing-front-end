import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';

@Component({
  selector: 'app-modify-customer',
  templateUrl: './modify-customer.component.html',
  styleUrls: ['./modify-customer.component.css'],
})
export class ModifyCustomerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const titlePage = document.querySelector('#titlePage');
    if (!titlePage) return;

    if (window.location.pathname.includes('edit')) {
      titlePage.innerHTML = 'Update Customer';
      const customer = DataSource.getCustomerById();
      (<HTMLInputElement>document.querySelector('input#fullName')).value =
        customer.profile.fullName;
      (<HTMLInputElement>document.querySelector('input#email')).value =
        customer.profile.email;
      (<HTMLInputElement>document.querySelector('input#phone')).value =
        customer.profile.phone;
      (<HTMLTextAreaElement>(
        document.querySelector('textarea#address')
      )).innerText = customer.profile.address;
    } else {
      titlePage.innerHTML = 'Add Customer';
    }
  }
}

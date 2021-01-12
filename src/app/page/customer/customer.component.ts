import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setCustomerListTable();
  }

  private setCustomerListTable(): void {
    const table = document.querySelector('table#customerList');
    if (!table) {
      console.log('There is no table element.');
      return;
    }
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = /* html */ `
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>`;
    table.appendChild(tableHead);

    const tableBody = document.createElement('tbody');
    const customers = this.getCustomerList();
    customers.forEach((customer, idx) => {
      tableBody.innerHTML += /* html */ `
      <tr class="text-center">
        <th scope="row">${idx + 1}</th>
        <td>${customer.profile.fullName}</td>
        <td>${customer.profile.email}</td>
        <td>${customer.profile.phone}</td>
        <td>${customer.profile.address}</td>
        <td>
          <a href="/customer/edit" title="Edit" class="text-decoration-none">
            <i class="fal fa-edit fa-lg p-2"></i>
          </a>
          <a href="" title="Remove" class="text-decoration-none">
            <i class="fal fa-trash-alt fa-lg p-2"></i>
          </a>
          
        </td>
      </tr>`;
    });
    table.appendChild(tableBody);
  }

  private getCustomerList(): any[] {
    return [
      {
        id: 5,
        profile: {
          id: 9,
          fullName: 'Jojon Ferdinand',
          email: 'jojon@gmail.com',
          phone: '0812731212338',
          address: 'Sesame St.',
        },
        createdDate: '2020-12-28 18:12:55',
      },
      {
        id: 6,
        profile: {
          id: 2,
          fullName: 'Mark Henstein',
          email: 'henstein@gmail.com',
          phone: '0821731238',
          address: 'New York',
        },
        createdDate: '2020-12-28 18:12:55',
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.setUserListTable();

    const user: User = new User();
  }

  private setUserListTable(): void {
    const table = document.querySelector('table#userList');
    if (!table) return;

    const tableHead = document.createElement('thead');
    tableHead.innerHTML = /* html */ `
    <tr class="text-center">
        <th scope="col">No.</th>
        <th scope="col">Username</th>
        <th scope="col">Full Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Address</th>
        <th scope="col">Role</th>
        <th scope="col">Action</th>
    </tr>`;
    table.appendChild(tableHead);

    const tableBody = document.createElement('tbody');
    const users = DataSource.getUserList();
    users.forEach((user, idx) => {
      tableBody.innerHTML += /* html */ `
      <tr class="text-center">
          <th scope="row">${idx + 1}</th>
          <td>${user.username}</td>
          <td>${user.profile.fullName}</td>
          <td>${user.profile.email}</td>
          <td>${user.profile.phone}</td>
          <td>${user.profile.address}</td>
          <td>${user.role.name}</td>
          <td>
            <a href="/user/edit" title="Edit" class="text-decoration-none">
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
}

import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAdmin: boolean;

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdminRole();
    this.setRoleListTable();
  }

  private setRoleListTable(): void {
    const table = document.querySelector('table#roleList');
    if (!table) return;

    const tableHead = document.createElement('thead');
    tableHead.innerHTML = /* html */ `
    <tr class="text-center">
        <th scope="col">No.</th>
        <th scope="col">Code</th>
        <th scope="col">Name</th>
        <th scope="col">Action</th>
    </tr>`;
    table.appendChild(tableHead);

    const tableBody = document.createElement('tbody');
    const roles = DataSource.getRoleList();
    roles.forEach((role, idx) => {
      tableBody.innerHTML += /* html */ `
      <tr class="text-center">
          <th scope="row">${idx + 1}</th>
          <td>${role.code}</td>
          <td>${role.name}</td>
          <td>
            <a href="/role/edit" title="Edit" class="text-decoration-none">
              <i class="fal fa-edit fa-lg p-2"></i>
            </a>
            <a title="Remove" class="text-decoration-none">
              <i class="fal fa-trash-alt fa-lg p-2"></i>
            </a>
          </td>
      </tr>`;
    });
    table.appendChild(tableBody);
  }
}

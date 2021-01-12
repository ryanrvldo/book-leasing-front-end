import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css'],
})
export class ModifyUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const titlePage = document.querySelector('#titlePage');
    if (!titlePage) return;

    this.setRoleSelect();
    if (window.location.pathname.includes('edit')) {
      titlePage.innerHTML = 'Update User';
      const user = DataSource.getUserById();
      (<HTMLInputElement>document.querySelector('input#username')).value =
        user.username;
      (<HTMLInputElement>document.querySelector('input#fullName')).value =
        user.profile.fullName;
      (<HTMLInputElement>document.querySelector('input#email')).value =
        user.profile.email;
      (<HTMLInputElement>document.querySelector('input#phone')).value =
        user.profile.phone;
      (<HTMLTextAreaElement>(
        document.querySelector('textarea#address')
      )).innerText = user.profile.address;
    } else {
      titlePage.innerHTML = 'Add User';
    }
  }

  private setRoleSelect() {
    const roles = DataSource.getRoleList();
    const roleSelect = document.querySelector('select#roles');
    roles.forEach((role) => {
      const optionElement = document.createElement('option');
      optionElement.innerText = role.name;
      optionElement.value = String(role.id);
      roleSelect?.appendChild(optionElement);
    });
  }
}

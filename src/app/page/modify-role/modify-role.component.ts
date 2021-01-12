import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';

@Component({
  selector: 'app-modify-role',
  templateUrl: './modify-role.component.html',
  styleUrls: ['./modify-role.component.css'],
})
export class ModifyRoleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const titlePage = document.querySelector('#titlePage');
    if (!titlePage) return;

    if (window.location.pathname.includes('edit')) {
      titlePage.innerHTML = 'Update Role';
      const role = DataSource.getRoleById();
      (<HTMLInputElement>document.querySelector('input#code')).value =
        role.code;
      (<HTMLInputElement>document.querySelector('input#name')).value =
        role.name;
    } else {
      titlePage.innerHTML = 'Add Role';
    }
  }
}

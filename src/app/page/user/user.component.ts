import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) {}

  public users: User[];

  ngOnInit(): void {
    this.setUserListTable();
  }

  private setUserListTable(): void {
    this.userService.getAllUser().subscribe((value) => {
      this.users = value.result;
    });
  }
}

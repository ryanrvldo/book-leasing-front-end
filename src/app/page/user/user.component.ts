import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/data/data-source';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  public users: User[];
  isAdmin: boolean;

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdminRole();
    this.setUserListTable();
  }

  private setUserListTable(): void {
    this.userService.getAllUser().subscribe((value) => {
      this.users = value.result;
    });
  }
}

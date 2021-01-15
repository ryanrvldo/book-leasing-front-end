import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from 'src/app/data/data-source';
import { Profile } from 'src/app/model/profile';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user';
import { ToastService } from 'src/app/service/toast.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css'],
})
export class ModifyUserComponent implements OnInit {
  constructor(
    private router: Router,
    private toastService: ToastService,
    private userService: UserService
  ) {}

  user: User = new User();
  profile: Profile = new Profile();

  roles: Role[];
  selectedRole: string;

  ngOnInit(): void {
    this.setRoleSelect();
  }

  private setRoleSelect() {
    this.roles = DataSource.getRoleList();
  }

  async addUser() {
    this.user.profile = this.profile;
    const role = this.roles.find((r) => r.code === this.selectedRole);
    this.user.role = role;
    try {
      const response = await this.userService.addUser(this.user);
      if (response.code === 201) {
        this.toastService.emitMessage({
          severity: 'success',
          summary: 'Added',
          detail: response.result,
        });
        this.router.navigateByUrl('/user');
      }
    } catch (error) {
      this.toastService.emitMessage({
        severity: 'error',
        summary: 'Failed',
        detail: error.error.message,
      });
    }
  }
}

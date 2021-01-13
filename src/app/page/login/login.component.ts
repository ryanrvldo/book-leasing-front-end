import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  public user = new User();

  ngOnInit(): void {}

  public login(): void {
    this.userService.login(this.user).subscribe((value) => {
      if (value.token) {
        this.authService.saveToken(value.token);
        this.authService.saveUser(value.user);
        this.router.navigateByUrl('/dashboard');
      }
    });
  }
}

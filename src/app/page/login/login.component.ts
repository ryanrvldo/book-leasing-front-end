import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  public user = new User();

  ngOnInit(): void {}

  public login(): void {
    this.userService.login(this.user).subscribe(
      (value) => {
        if (value.token) {
          this.authService.saveToken(value.token);
          this.authService.saveUser(value.user);
          this.router.navigateByUrl('/dashboard');
        }
      },
      (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.message,
        });
      }
    );
  }
}

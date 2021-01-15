import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { ToastService } from 'src/app/service/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  providers: [MessageService],
})
export class BaseComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
    private messageService: MessageService
  ) {}

  public username: string;

  private subscription: Subscription;

  ngOnInit(): void {
    this.setUsername();
    this.subscribeMessageObservable();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setUsername(): void {
    const user: User = this.authService.getUser();
    this.username = user.username;
  }

  private subscribeMessageObservable() {
    this.subscription = this.toastService.messageObservable.subscribe(
      (msg: Message) => {
        this.messageService.add(msg);
      }
    );
  }

  logout(): void {
    this.authService.clearCache();
    this.router.navigateByUrl('/login');
  }
}

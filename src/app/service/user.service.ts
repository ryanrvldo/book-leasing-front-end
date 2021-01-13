import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  login(user: User): Observable<any> {
    return this.postMethod('authentication', user);
  }

  getAllUser(): Observable<any> {
    return this.getMethod('users');
  }
}

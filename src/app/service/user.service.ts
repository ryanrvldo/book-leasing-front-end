import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(protected http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(`${Constants.BASE_URL}/authentication`, user);
  }

  getAllUser(): Observable<any> {
    return this.http.get(`${Constants.BASE_URL}/users`);
  }
}

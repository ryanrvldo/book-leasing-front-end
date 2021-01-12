import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants/constants';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(`${Constants.BASE_URL}authentication`, user);
  }

  getUser(token: string): Observable<Object> {
    return this.http.get(`${Constants.BASE_URL}user/admin`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearCache(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  saveUser(user: User): void {
    const data = JSON.stringify(user);
    localStorage.setItem('user', data);
  }

  getUser(): User {
    const data = JSON.parse(localStorage.getItem('user'));
    return data;
  }

  isAdminRole(): boolean {
    const user = this.getUser();
    if (!user) {
      return false;
    }
    return user.role && user.role.code === 'ADM';
  }
}

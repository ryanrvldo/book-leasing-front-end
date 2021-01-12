import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';
import { HeaderRental } from '../model/header-rental';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllRental(): Observable<any> {
    return this.http.get(`${Constants.BASE_URL}transaction/rentals`, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` },
    });
  }
}

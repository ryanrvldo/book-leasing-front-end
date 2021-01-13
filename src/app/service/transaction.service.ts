import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalHeaderRequest } from '../model/rental-header-request';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService extends BaseService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  getAllRental(): Observable<any> {
    return this.getMethod('transaction/rentals');
  }

  addRentalTransaction(body: RentalHeaderRequest): Observable<any> {
    return this.postMethod('transaction/rental', body);
  }
}

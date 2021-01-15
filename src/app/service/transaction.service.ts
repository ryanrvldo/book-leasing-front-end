import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';
import { RentalHeaderRequest } from '../model/rental-header-request';
import { ReturnRequest } from '../model/return-request';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(protected http: HttpClient) {}

  getAllRentalTransaction(): Promise<any> {
    return this.http
      .get(`${Constants.BASE_URL}/transaction/rentals`)
      .toPromise();
  }

  addRentalTransaction(body: RentalHeaderRequest): Observable<any> {
    return this.http.post(`${Constants.BASE_URL}/transaction/rental`, body);
  }

  getRentalDetails(receipt: String): Observable<any> {
    return this.http.get(`${Constants.BASE_URL}/transaction/rental/${receipt}`);
  }

  getAllReturnTransaction(): Promise<any> {
    return this.http
      .get(`${Constants.BASE_URL}/transaction/returns`)
      .toPromise();
  }

  addReturnTransaction(body: ReturnRequest[]): Observable<any> {
    return this.http.post(`${Constants.BASE_URL}/transaction/return`, body);
  }
}

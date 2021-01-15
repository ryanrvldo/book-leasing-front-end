import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllCustomer(): Promise<any> {
    return this.http.get(`${Constants.BASE_URL}/customers`).toPromise();
  }

  addNewCustomer(body: Profile): Promise<any> {
    return this.http.post(`${Constants.BASE_URL}/customer`, body).toPromise();
  }
}

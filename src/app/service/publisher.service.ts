import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { Publisher } from '../model/publisher';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  constructor(private http: HttpClient) {}

  getAllPublisher(): Promise<any> {
    return this.http.get(`${Constants.BASE_URL}/publishers`).toPromise();
  }

  addNewPublisher(requestBody: Publisher): Promise<any> {
    return this.http
      .post(`${Constants.BASE_URL}/publisher`, requestBody)
      .toPromise();
  }
}

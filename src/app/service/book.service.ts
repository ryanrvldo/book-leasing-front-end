import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { BookRequest } from '../model/book-request';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBook(): Promise<any> {
    return this.http.get(`${Constants.BASE_URL}/books`).toPromise();
  }

  addBook(requestBody: BookRequest): Promise<any> {
    return this.http
      .post(`${Constants.BASE_URL}/book`, requestBody)
      .toPromise();
  }
}

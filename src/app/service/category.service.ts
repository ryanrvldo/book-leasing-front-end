import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategory(): Promise<any> {
    return this.http.get(`${Constants.BASE_URL}/categories`).toPromise();
  }

  addNewCategory(body: Category): Promise<any> {
    return this.http.post(`${Constants.BASE_URL}/category`, body).toPromise();
  }
}

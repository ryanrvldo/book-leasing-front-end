import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { Language } from '../model/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private http: HttpClient) {}

  getAllLanguage(): Promise<any> {
    return this.http.get(`${Constants.BASE_URL}/languages`).toPromise();
  }

  addNewLanguage(body: Language): Promise<any> {
    return this.http.post(`${Constants.BASE_URL}/language`, body).toPromise();
  }
}

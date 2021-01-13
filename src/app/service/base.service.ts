import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class BaseService {
  constructor(protected http: HttpClient) {}

  private BASE_URL = 'http://localhost:8080/api/';
  private header = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };

  protected getMethod(pathUrl: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}${pathUrl}`, this.header);
  }

  protected postMethod(pathUrl: string, body: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}${pathUrl}`, body, this.header);
  }
}

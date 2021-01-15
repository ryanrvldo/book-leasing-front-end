import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(protected http: HttpClient) {}

  getAvailableInventory(): Observable<any> {
    return this.http.get(`${Constants.BASE_URL}/inventories/status/1`);
  }

  getAllInventoryStatus(): Promise<any> {
    return this.http
      .get(`${Constants.BASE_URL}/inventories/status`)
      .toPromise();
  }
}

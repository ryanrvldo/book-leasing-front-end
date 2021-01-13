import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class InventoryService extends BaseService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  getAvailableInventory(): Observable<any> {
    return this.getMethod('inventories/status/1');
  }
}

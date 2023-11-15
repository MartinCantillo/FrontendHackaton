import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class resgisterProductService {

  private productUrl: string = 'http://localhost:8023/user/product';
  ordenId: number = 0;
  constructor(private httpClient: HttpClient) {}
  
  public SaveProduct(clients: Product): Observable<Object> {
    return this.httpClient.post(`${this.productUrl}`, Product);
  }
}
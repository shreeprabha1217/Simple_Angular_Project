import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './product-list.interface'; // Import the Comment interface

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
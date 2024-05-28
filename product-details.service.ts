import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetails } from './product-details.interface'; // Import the Comment interface

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProductDetails(title:string): Observable<any> {
     return this.http.get<any>(`${this.baseUrl}`);
  }
}
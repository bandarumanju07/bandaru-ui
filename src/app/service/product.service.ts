import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl =
    'https://bandaru-product-service.onrender.com/api/v1/products/allproducts';
  //private baseUrl ='http://localhost:8080/api/v1/products/allproducts';

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}

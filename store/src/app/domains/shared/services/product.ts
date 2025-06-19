import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductModel } from '@shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.http.get<ProductModel[]>('https://api.escuelajs.co/api/v1/products');
  }

  getProductById(id: number) {
    return this.http.get<ProductModel>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}

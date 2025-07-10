import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductModel } from '@shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts(category_id?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (category_id) {
      url.searchParams.append('categoryId', category_id);
    }
    return this.http.get<ProductModel[]>(url.toString());
  }

  getProductById(id: number) {
    return this.http.get<ProductModel>(
      `https://api.escuelajs.co/api/v1/products/${id}`,
    );
  }
}

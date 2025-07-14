import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductModel } from '@shared/models/product';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts(category_id?: string) {
    const url = new URL(`${environment.apiUrl}/api/v1/products`);
    if (category_id) {
      url.searchParams.append('categoryId', category_id);
    }
    return this.http.get<ProductModel[]>(url.toString());
  }

  getProductById(id: number) {
    const url = `${environment.apiUrl}/api/v1/products/${id}`;
    return this.http.get<ProductModel>(url);
  }
}

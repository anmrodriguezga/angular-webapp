import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryModel } from '@shared/models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  getCategories() {
    return this.http.get<CategoryModel[]>(
      'https://api.escuelajs.co/api/v1/categories',
    );
  }
}

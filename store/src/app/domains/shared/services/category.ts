import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoryModel } from '@shared/models/category';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  getCategories() {
    return this.http.get<CategoryModel[]>(
      `${environment.apiUrl}/api/v1/categories`,
    );
  }
}

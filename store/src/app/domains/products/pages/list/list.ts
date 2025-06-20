import { Component, signal, inject } from '@angular/core';
import { Product } from '@products/components/product/product';
import { CategoryModel } from '@shared/models/category';
import { ProductModel } from '@shared/models/product';
import { CartService } from '@shared/services/cart';
import { CategoryService } from '@shared/services/category';
import { ProductService } from '@shared/services/product';

@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  products = signal<ProductModel[]>([]);
  categories = signal<CategoryModel[]>([]);

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  private getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

}

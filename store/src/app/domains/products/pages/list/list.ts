import { Component, signal, inject, Input, OnInit, OnChanges } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@products/components/product/product';
import { CategoryModel } from '@shared/models/category';
import { ProductModel } from '@shared/models/product';
import { CartService } from '@shared/services/cart';
import { CategoryService } from '@shared/services/category';
import { ProductService } from '@shared/services/product';

@Component({
  selector: 'app-list',
  imports: [Product, RouterLinkWithHref],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export default class List implements OnInit, OnChanges {

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  @Input() category_id?: string;

  products = signal<ProductModel[]>([]);
  categories = signal<CategoryModel[]>([]);

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges() {
    this.getProducts();
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
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

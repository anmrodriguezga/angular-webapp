import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal, OnInit } from '@angular/core';
import { ProductModel } from '@shared/models/product';
import { CartService } from '@shared/services/cart';
import { ProductService } from '@shared/services/product';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export default class ProductDetail implements OnInit {
  @Input({ required: true }) id?: number;

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product = signal<ProductModel | null>(null);
  coverImage = signal<string>('');

  ngOnInit() {
    if (this.id) {
      this.productService.getProductById(this.id!).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.coverImage.set(product.images[0]);
          }
        },
      });
    }
  }

  changeCoverImage(image: string) {
    this.coverImage.set(image);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}

import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { ProductModel } from '@shared/models/product';
import { ProductService } from '@shared/services/product';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {

  @Input({ required: true }) id?: number;

  private productService = inject(ProductService);

  product = signal<ProductModel | null>(null);

  ngOnInit() {
    if (this.id) {
      this.productService.getProductById(this.id!)
        .subscribe({
          next: (product) => {
            this.product.set(product);
          }
        });
    }
  }

}

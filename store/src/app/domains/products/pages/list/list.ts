import { Component, signal, inject } from '@angular/core';
import { Product } from '../../components/product/product';
import { ProductModel } from '../../../shared/models/product';
import { Header } from '../../../shared/components/header/header';
import { CartService } from '../../../shared/services/cart';
import { ProductService } from '../../../shared/services/product';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products = signal<ProductModel[]>([]);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }
}

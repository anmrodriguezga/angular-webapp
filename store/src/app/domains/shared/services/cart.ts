import { computed, Injectable, signal } from '@angular/core';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<ProductModel[]>([]);
  total = computed(() => {
    return this.cart().reduce((total, product) => total + product.price, 0);
  });

  addToCart(product: ProductModel) {
    this.cart.update(currentCart => [...currentCart, product]);
  }
}

import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: ProductModel[] = [];

  constructor() { }

  addProduct(product: ProductModel): void {
    this.myShoppingCart.push(product);
  }

  getShoppingCart(): ProductModel[] {
    return this.myShoppingCart;
  }

  getTotal(): number {
    return this.myShoppingCart.reduce((acc, item) => acc + item.price, 0);
  }
}

import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: ProductModel[] = [];
  private myCart = new BehaviorSubject<ProductModel[]>([]);


  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: ProductModel): void {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart(): ProductModel[] {
    return this.myShoppingCart;
  }

  getTotal(): number {
    return this.myShoppingCart.reduce((acc, item) => acc + item.price, 0);
  }
}

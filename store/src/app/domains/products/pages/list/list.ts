import { Component, signal, inject } from '@angular/core';
import { Product } from '../../components/product/product';
import { ProductModel } from '../../../shared/models/product';
import { Header } from '../../../shared/components/header/header';
import { CartService } from '../../../shared/services/cart';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  private cartService = inject(CartService);

  products = signal<ProductModel[]>([]);

  constructor() {
    const initialProducts: ProductModel[] = [
      { id: 1, title: 'Product 1', price: 100, image: 'https://picsum.photos/640/640?r=23', creationDate: new Date() },
      { id: 2, title: 'Product 2', price: 200, image: 'https://picsum.photos/640/640?r=24', creationDate: new Date() },
      { id: 3, title: 'Product 3', price: 300, image: 'https://picsum.photos/640/640?r=25', creationDate: new Date() },
      { id: 4, title: 'Product 4', price: 400, image: 'https://picsum.photos/640/640?r=26', creationDate: new Date() },
      { id: 5, title: 'Product 5', price: 500, image: 'https://picsum.photos/640/640?r=27', creationDate: new Date() },
      { id: 6, title: 'Product 6', price: 600, image: 'https://picsum.photos/640/640?r=28', creationDate: new Date() },
      { id: 7, title: 'Product 7', price: 700, image: 'https://picsum.photos/640/640?r=29', creationDate: new Date() },
      { id: 8, title: 'Product 8', price: 800, image: 'https://picsum.photos/640/640?r=30', creationDate: new Date() }
    ];
    this.products.set(initialProducts);
  }

  addToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }
}

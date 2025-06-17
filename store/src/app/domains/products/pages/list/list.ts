import { Component, signal } from '@angular/core';
import { Product } from '../../components/product/product';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  products = signal<ProductModel[]>([]);

  constructor() {
    const initialProducts: ProductModel[] = [
      { id: 1, title: 'Product 1', price: 100, image: 'https://picsum.photos/640/640?r=23', creationDate: new Date() },
      { id: 2, title: 'Product 2', price: 200, image: 'https://picsum.photos/640/640?r=24', creationDate: new Date() },
      { id: 3, title: 'Product 3', price: 300, image: 'https://picsum.photos/640/640?r=25', creationDate: new Date() },
      { id: 4, title: 'Product 4', price: 400, image: 'https://picsum.photos/640/640?r=26', creationDate: new Date() },
      { id: 5, title: 'Product 5', price: 500, image: 'https://picsum.photos/640/640?r=27', creationDate: new Date() }
    ];
    this.products.set(initialProducts);
  }

  fromChild(event: string) {
    console.log('Estamos en el padre y el hijo dice: ', event);
  }
}

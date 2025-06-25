import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Product } from '../product/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [Product, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

  total = 0;
  myShoppingCart: ProductModel[] = [];
  products: ProductModel[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      image: './assets/product.jpg'
    },
    {
      id: 2,
      name: 'Headphones',
      price: 150,
      image: './assets/product.jpg'
    },
    {
      id: 3,
      name: 'Coffee Mug',
      price: 12,
      image: './assets/product.jpg'
    },
    {
      id: 4,
      name: 'Backpack',
      price: 60,
      image: './assets/product.jpg'
    },
    {
      id: 5,
      name: 'Smartphone',
      price: 800,
      image: './assets/product.jpg'
    }
  ];

  onAddToShoppingCart(product: ProductModel) {
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((acc, item) => acc + item.price, 0);
    console.log('total:', this.total);
  }

}

import { Component } from '@angular/core';
import { Img } from './components/img/img';
import { FormsModule } from '@angular/forms';
import { Product } from './components/product/product';
import { ProductModel } from './models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Img, Product, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected imgParent = '';
  products: ProductModel[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      image: './assets/product.png'
    },
    {
      id: 2,
      name: 'Headphones',
      price: 150,
      image: './assets/product.png'
    },
    {
      id: 3,
      name: 'Coffee Mug',
      price: 12,
      image: './assets/product.png'
    },
    {
      id: 4,
      name: 'Backpack',
      price: 60,
      image: './assets/product.png'
    },
    {
      id: 5,
      name: 'Smartphone',
      price: 800,
      image: './assets/product.png'
    }
  ];

  onLoaded(img: string) {
    console.log('Load Padre:', img);
  }
}

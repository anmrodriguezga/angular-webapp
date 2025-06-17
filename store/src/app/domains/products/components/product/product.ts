import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input({required: true}) product!: ProductModel;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click from child');
    this.addToCart.emit(`Este es un mensaje desde el hijo ${this.product.title}`);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '@shared/models/product';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ReversePipe],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input({required: true}) product!: ProductModel;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}

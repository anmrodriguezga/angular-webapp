import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '@shared/models/product';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse';
import { TimeAgoPipe } from '@shared/pipes/time-ago';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
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

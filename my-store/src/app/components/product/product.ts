import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Img } from '../img/img';
import { ReversePipe } from '../../pipes/reverse-pipe';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-product',
  imports: [Img, CommonModule, ReversePipe, HighlightDirective],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  
  @Input() product!: ProductModel;
  @Output() addedProduct = new EventEmitter<ProductModel>();

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

}

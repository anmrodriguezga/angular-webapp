import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Img } from '../img/img';

@Component({
  selector: 'app-product',
  imports: [Img, CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  
  @Input() product!: ProductModel;

}

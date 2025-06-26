import { Component, inject, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Product } from '../product/product';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store';
import { ProductsService } from '../../services/products';
import { TimeAgoPipe } from '../../pipes/time-ago-pipe';

@Component({
  selector: 'app-products',
  imports: [Product, TimeAgoPipe, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit {

  productsService = inject(ProductsService);
  storeService = inject(StoreService);

  total = 0;
  myShoppingCart: ProductModel[] = [];
  products: ProductModel[] = [];
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor() {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }
  
  ngOnInit() {
    this.productsService.getAllProducts().subscribe((products: ProductModel[]) => {
      this.products = products;
    });
  }

  onAddToShoppingCart(product: ProductModel) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}

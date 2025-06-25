import { Component, inject } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Product } from '../product/product';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store';
import { ProductsService } from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [Product, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

  productsService = inject(ProductsService);

  total = 0;
  myShoppingCart: ProductModel[] = [];
  products: ProductModel[] = [];

  constructor(private storeService: StoreService) {
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

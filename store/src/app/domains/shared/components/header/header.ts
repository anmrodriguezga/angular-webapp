import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  @Input({ required: true }) cart: ProductModel[] = [];

  hideSidebar = signal(true);
  total = signal(0);

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.update(() => this.calcularTotal());
    }
  }

  toggleSidebar() {
    this.hideSidebar.update(prevState => !prevState);
  }

  calcularTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

}

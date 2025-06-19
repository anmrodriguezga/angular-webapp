import { Component, Input, signal, inject, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  private cartService = inject(CartService);

  hideSidebar = signal(true);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSidebar() {
    this.hideSidebar.update(prevState => !prevState);
  }

}

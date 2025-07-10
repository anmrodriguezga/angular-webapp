import { Component, signal, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private cartService = inject(CartService);

  hideSidebar = signal(true);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toggleSidebar() {
    this.hideSidebar.update((prevState) => !prevState);
  }
}

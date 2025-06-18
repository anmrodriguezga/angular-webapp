import { Component, Input, signal } from '@angular/core';
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

  toggleSidebar() {
    this.hideSidebar.update(prevState => !prevState);
  }

}

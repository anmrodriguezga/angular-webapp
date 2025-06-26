import { Component, inject, OnInit } from '@angular/core';
import { StoreService } from '../../services/store';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav implements OnInit {

  activeMenu = false;
  counter = 0;

  storeService = inject(StoreService);

  ngOnInit() {
    this.storeService.myCart$.subscribe((cart) => {
      this.counter = cart.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

}

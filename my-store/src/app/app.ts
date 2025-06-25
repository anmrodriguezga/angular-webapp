import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [Products, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected imgParent = '';
  showImg = true;

  onLoaded(img: string) {
    console.log('Load Padre:', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [CommonModule],
  templateUrl: './img.html',
  styleUrl: './img.scss'
})
export class Img {

  @Input() img: string = 'valor init';
  @Output() loaded = new EventEmitter<string>();
  imageDefault: string = './assets/default-image.jpg';

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Load Hijo');
    this.loaded.emit(this.img);
  }

}

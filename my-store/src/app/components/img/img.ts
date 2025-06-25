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

  constructor() {
    // before render
    // avoid async -- executed once
    console.log('Constructor', 'img:', this.img);
  }

  ngOnChanges() {
    // before-during render
    // input changes - executed every update
    console.log('ngOnChanges', 'img:', this.img);
  }

  ngOnInit() {
    // before render
    // allow async -- executed once
    console.log('ngOnInit', 'img:', this.img);
  }

  ngAfterViewInit() {
    // after render
    // children handler
    console.log('ngAfterViewInit', 'img:', this.img);
  }

  ngOnDestroy() {
    // on delete
    // avoid async -- executed once
    console.log('ngOnDestroy', 'img:', this.img);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Load Hijo');
    this.loaded.emit(this.img);
  }

}

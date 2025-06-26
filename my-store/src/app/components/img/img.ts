import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [CommonModule],
  templateUrl: './img.html',
  styleUrl: './img.scss'
})
export class Img implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  img = 'valor init';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img') 
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img:', this.img);
  }
  @Input() alt = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/default-image.jpg';
  // counter = 0;
  // counterFn: number| undefined;

  constructor() {
    // before render
    // avoid async -- executed once
    console.log('Constructor', 'img:', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before-during render
    // input changes - executed every update
    console.log('ngOnChanges', 'img:', this.img);
    console.log('ngOnChanges', 'changes:', changes);
  }

  ngOnInit() {
    // before render
    // allow async -- executed once
    console.log('ngOnInit', 'img:', this.img);
    // this.counterFn = setInterval(() => {
    //   this.counter++;
    //   console.log('run counter');
    // }, 1000);
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
    // clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('Load Hijo');
    this.loaded.emit(this.img);
  }

}

import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';

  constructor() {
    // NO ASYNC CODE HERE
    // Before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and during render
    console.log('ngOnChanges: ', changes);
    console.log('-'.repeat(10));
  }

}

import { Component, Input, signal, SimpleChanges, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC CODE HERE
    // Before render, only once
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and during render
    console.log('ngOnChanges: ', changes);
    console.log('-'.repeat(10));

    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
    console.log('-'.repeat(10));
  }

  ngOnInit() {
    // After render, only once
    // Allows async code (async, then, subscribe, etc.)
    console.log('ngOnInit');
    console.log('duration: ', this.duration);
    console.log('message: ', this.message);
    console.log('-'.repeat(10));
    
    this.counterRef = window.setInterval(() => {
      console.log('runInterval');
      this.counter.update(value => value + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    // After ngOnInit, only once
    // Asks if children are rendered
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // Before destroy
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
  }

}

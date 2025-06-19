import { Component, signal } from '@angular/core';
import { Counter } from '@shared/components/counter/counter';

import { WaveAudio } from '../../components/wave-audio/wave-audio';
import { HighlightDirective } from '@shared/directives/highlight';

@Component({
  selector: 'app-about',
  imports: [Counter, WaveAudio, HighlightDirective],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  duration = signal(1000);
  message = signal('Hello World!');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.valueAsNumber;
    if (!isNaN(value)) {
      this.duration.set(value);
    }
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}

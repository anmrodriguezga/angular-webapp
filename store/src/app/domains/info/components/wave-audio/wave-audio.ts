import {
  Component,
  ElementRef,
  Input,
  signal,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.html',
  styleUrl: './wave-audio.css',
})
export class WaveAudio implements AfterViewInit {
  @Input({ required: true }) audioUrl!: string;
  @ViewChild('wave') waveContainer!: ElementRef;

  private ws!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.waveContainer.nativeElement,
    });
    this.ws.on('play', () => this.isPlaying.set(true));
    this.ws.on('pause', () => this.isPlaying.set(false));
  }

  playPause() {
    this.ws.playPause();
  }
}

import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.html',
  styleUrl: './wave-audio.css'
})
export class WaveAudio {
  
  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') waveContainer!: ElementRef;

  ngAfterViewInit() {
    WaveSurfer.create({
      url: this.audioUrl,
      container: this.waveContainer.nativeElement,
    });
  }
}

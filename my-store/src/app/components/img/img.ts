import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  imports: [CommonModule],
  templateUrl: './img.html',
  styleUrl: './img.scss'
})
export class Img {
  
  @Input() img: string = 'valor init';

}

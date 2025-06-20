import { Component } from '@angular/core';
import { Img } from './components/img/img';

@Component({
  selector: 'app-root',
  imports: [Img],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'my-store';
}

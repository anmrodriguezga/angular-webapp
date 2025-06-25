import { Component } from '@angular/core';
import { Img } from './components/img/img';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Img, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected imgParent = 'https://www.w3schools.com/howto/img_avatar.png';

  onLoaded(img: string) {
    console.log('Load Padre:', img);
  }
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  hideSidebar = signal(true);

  toggleSidebar() {
    this.hideSidebar.update(prevState => !prevState);
  }

}

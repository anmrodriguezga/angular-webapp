import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  welcome = 'Hola';
  tasks = [
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto',
    'Crear un componente'
  ];
  name = 'Andres';
  age = 27;
  disabled = false;
  img = 'https://angular.io/assets/images/logos/angular/angular.png';

  person = {
    name: 'Andres',
    age: 27,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
}

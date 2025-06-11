import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

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
  name = signal('Angie');
  age = 27;
  disabled = false;

  person = {
    name: 'Andres',
    age: 27,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  clickHandler() {
    alert('Hola desde el clickHandler');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log('keydownHandler: ', input.value);
  }
}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  welcome = 'Hola';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto',
    'Crear un componente',
    'Crear un servicio'
  ]);
  name = signal('Angie');
  age = 27;
  disabled = false;

  person = signal({
    name: 'Andres',
    age: 27,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  });

  colorCtl = new FormControl();

  constructor() {
    this.colorCtl.valueChanges.subscribe((value) => {
      console.log('Color changed: ', value);
    });
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

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newAge = parseInt(input.value, 10);
    this.person.update((current) => ({
      ...current,
      age: newAge
    }));
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newName = input.value;
    this.person.update((current) => ({
      ...current,
      name: newName
    }));
  }
}

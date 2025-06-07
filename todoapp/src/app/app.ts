import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected welcome = 'Hola';
  protected tasks = [
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto',
    'Crear un componente'
  ]
}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear un nuevo proyecto',
    'Crear un componente',
    'Crear un servicio'
  ]);
}

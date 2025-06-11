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

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.tasks.update(tasks => {
      if (newTask.trim() === '') {
        return tasks; // No change if input is empty
      }
      return [...tasks, newTask]; 
    });
  }

  deleteTask(index: number) {
    this.tasks.update(tasks => {
      return tasks.filter((_, i) => i !== index); 
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Instalar el Angular CLI',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear un nuevo proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear un componente',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear un servicio',
      completed: false
    }
  ]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };

    this.tasks.update(tasks => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update(tasks => {
      return tasks.filter((_, i) => i !== index); 
    });
  }
}

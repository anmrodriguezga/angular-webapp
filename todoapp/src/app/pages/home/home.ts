import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
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
      completed: true
    },
    {
      id: Date.now(),
      title: 'Crear un nuevo proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear un componente',
      completed: true
    },
    {
      id: Date.now(),
      title: 'Crear un servicio',
      completed: false
    }
  ]);

  filter = signal<'all' | 'pending' | 'completed'>('all');
  tasksByFilter = computed(() => {
    const currentFilter = this.filter();
    const tasks = this.tasks();
    if (currentFilter === 'pending') {
      return tasks.filter(task => !task.completed);
    }
    if (currentFilter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  });

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9\s]+$/),
    ]
  });

  changeHandler() {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if (value.length !== 0) {
        this.addTask(value);
        this.newTaskCtrl.reset();
      }
    }
  }

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    };

    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.filter((_, i) => i !== index);
    });
  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      const task = tasks[index];
      return tasks.map((t, i) => i === index ? { ...t, completed: !task.completed } : t);
    });
  }

  updateTaskEditingMode(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((t, i) => i === index ? { ...t, editing: true } : { ...t, editing: false });
    });
  }

  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks) => {
      return tasks.map((t, i) => i === index ? { ...t, title: input.value, editing: false } : t);
    });
  }

  changeFilter(filter: 'all' | 'pending' | 'completed') {
    this.filter.set(filter);
  }
}

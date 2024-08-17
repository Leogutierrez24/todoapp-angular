import { Component, signal } from '@angular/core';
import { NgFor, JsonPipe, NgIf } from "@angular/common";
import { Task } from "../../models/task.model";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: "Crear Proyecto",
      completed: false,
    },
    {
      id: Date.now(),
      title: "Crear Componentes",
      completed: false,
    },
  ]);

  private addTask(title: string): void
  {
    const newTask: Task =
    {
      id: Date.now(),
      title,
      completed: false
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  public inputHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTaskTitle = input.value;
    this.addTask(newTaskTitle);
  }

  public deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }

  public updateTask(index: number): void
  {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) =>
      {
        if (position == index)
        {
          return { ...task, completed: !task.completed }
        }

        return task;
      });
    });
  }

}

import { Component } from '@angular/core';
import { TaskService, Task } from './task.service';

import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from "./tasks-form/tasks-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasksComponent, TaskListComponent],
  templateUrl:'./app.component.html'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  editTask(updatedTask: Task) {
    this.taskService.updateTask(updatedTask);
  }
}

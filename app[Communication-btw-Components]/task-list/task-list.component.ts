import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { Task } from '../task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent, FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskDeleted = new EventEmitter<number>();
  @Output() taskEdited = new EventEmitter<Task>();

  onDelete(taskId: number) {
    this.taskDeleted.emit(taskId);
  }

  onEdit(task: Task) {
    this.taskEdited.emit(task);
  }
}


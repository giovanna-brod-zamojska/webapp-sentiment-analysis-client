import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})

export class NewTaskComponent {

    
  @Output() taskAdded = new EventEmitter<Task>();

  title: string = '';
  description: string = '';
  

  onSubmit(): void {
    const newTask: Task = {
      title: this.title,
      description: this.description,
      completed: false,
      created_at: new Date()
    };
    this.taskAdded.emit(newTask);
    this.title = '';
    this.description = '';
    console.log(this.title)
  }
  
}


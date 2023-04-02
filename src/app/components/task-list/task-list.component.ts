import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  //providers: [TaskService]
})


export class TaskListComponent implements OnInit {
  
  constructor(private taskService: TaskService) { 
     console.log("costruttore to do");
  }

  ngOnInit() {
    console.log("nginit to do");
    this.taskService.getAllTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  tasks!: Task[];
  isDisabled: boolean = true;

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(newTask => {
      this.tasks.push(newTask);
    });
  }
  

  deleteTask(task: any) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.taskService.deleteTask(task._id).subscribe(newTask => {
        this.tasks.splice(index, 1);
        console.log("task deleted")
      });
    }
  }

  toggleCompleted(task: any) {
    task.completed = !task.completed;
    this.isDisabled = !this.isDisabled;
  }

}



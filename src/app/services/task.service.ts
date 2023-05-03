
  import { Injectable } from '@angular/core';
  import { HttpClient,  HttpHeaders  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { catchError, map } from 'rxjs/operators';
  import { Task } from '../models/task.model';


  @Injectable({
    providedIn: 'root'
  })
  export class TaskService {
    private baseUrl = 'http://192.168.0.197:3000/api';
  
    constructor(private http: HttpClient) { }
  
    private handleError(error: any): Observable<never> {
      console.error(error);
      return throwError(() => new Error('An error occurred. Please try again later.'));
    }

    getAllTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(`${this.baseUrl}/tasks`)
        .pipe(
          catchError(this.handleError)
        );
    }
  
    addTask(task: Task): Observable<Task> {
      return this.http.post<Task>(`${this.baseUrl}/tasks`, task,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(
        catchError(this.handleError)
      );
    }
  
    deleteTask(taskId: string): Observable<any> {
      const url = `${this.baseUrl}/tasks/${taskId}`;
      return this.http.delete(url);
    }
    
  }
  
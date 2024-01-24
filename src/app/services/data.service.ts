import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private logger: LoggerService) {
    this.getUsersData()
  }

  private subject = new BehaviorSubject<any>([]);

  sendCompletedTasks(tasks: any[]) {
    console.log('tasks set: ', tasks);
    this.subject.next(tasks);
  }

  clearMessage() {
    this.subject.next([]);
  }

  onTaskUpdated(): Observable<any> {
    return this.subject.asObservable();
  }

  getUsersData(): Observable<User[]> {
    this.logger.log("getUsersData method is called!")
    debugger
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(shareReplay());
  }

  
}
